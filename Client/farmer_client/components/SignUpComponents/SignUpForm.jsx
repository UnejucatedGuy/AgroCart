import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import BackgroundCard from '../BgCard';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../../config/constants';

const SignUpForm = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [errorText, setErrorText] = useState('');

  const createNewUser = async ({email, password, name, phoneNumber}) => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password,
        role: 'farmer',
        name,
        phoneNumber,
        storeName: `${name}'s farm`,
        storeDescription: `farm is managed by ${name}`,
      }),
    };

    const response = await fetch(
      `${BASE_URL}api/users/register`,
      requestOptions,
    );
    const json = await response.json();

    if (response.ok) {
      console.log(json.token);
      setErrorText('');
      AsyncStorage.setItem('AccessToken', json.token);
      navigation.replace('ManageStore');
    } else {
      console.log(json.message);
      setErrorText(`*${json.message}`);
    }
  };

  const signUPFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is Too Short!')
      .max(50, 'Name isToo Long!')
      .required('Please Enter Your Name '),
    email: Yup.string().email().required('Please Enter an Email'),
    password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
        message: 'Please create a stronger password',
      })
      .required('Please Create a password'),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        {
          message: 'Phone number is not valid',
        },
      )
      .required('Please Enter Phone Number'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
      }}
      validationSchema={signUPFormSchema}
      onSubmit={async values => {
        await createNewUser(values);
      }}>
      {formikProps => (
        <View style={styles.card}>
          <BackgroundCard>
            <HelperText style={styles.helpText}>{errorText}</HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Name"
              placeholder="e.g. Virat Kohli"
              error={formikProps.touched.name && formikProps.errors.name}
              onChangeText={formikProps.handleChange('name')}
              onBlur={formikProps.handleBlur('name')}
              value={formikProps.values.name}
            />
            <HelperText style={styles.helpText}>
              {formikProps.touched.name && formikProps.errors.name}
            </HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Email"
              placeholder="e.g. abc@gmail.com"
              keyboardType="email-address"
              error={formikProps.touched.email && formikProps.errors.email}
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              value={formikProps.values.email}
            />
            <HelperText style={styles.helpText}>
              {formikProps.touched.email && formikProps.errors.email}
            </HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Phone Number"
              placeholder="e.g. 9876765321"
              keyboardType="number-pad"
              error={
                formikProps.touched.phoneNumber &&
                formikProps.errors.phoneNumber
              }
              onChangeText={formikProps.handleChange('phoneNumber')}
              onBlur={formikProps.handleBlur('phoneNumber')}
              value={formikProps.values.phoneNumber}
            />
            <HelperText style={styles.helpText}>
              {formikProps.touched.phoneNumber &&
                formikProps.errors.phoneNumber}
            </HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Password"
              secureTextEntry={hidePass}
              right={
                <TextInput.Icon
                  icon={hidePass ? 'eye-off' : 'eye'}
                  onPress={() => setHidePass(!hidePass)}
                />
              }
              error={
                formikProps.touched.password && formikProps.errors.password
              }
              onChangeText={formikProps.handleChange('password')}
              onBlur={formikProps.handleBlur('password')}
              value={formikProps.values.password}
            />
            <HelperText style={styles.helpText}>
              {formikProps.touched.password && formikProps.errors.password}
            </HelperText>
            <Button
              style={styles.button}
              icon="camera"
              mode="contained"
              onPress={formikProps.handleSubmit}
              title="Submit">
              Sign Up
            </Button>
          </BackgroundCard>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  input: {
    marginHorizontal: 20,
  },
  helpText: {
    marginBottom: 10,
    marginHorizontal: 20,
    color: 'red',
  },
  button: {
    marginHorizontal: 100,
    marginBottom: 20,
  },
});
