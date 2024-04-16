import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, HelperText, TextInput} from 'react-native-paper';
import BackgroundCard from '../BgCard';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../../config/constants';

const LoginForm = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [errorText, setErrorText] = useState('');

  const loginUser = async ({phoneNumber, password}) => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        phoneNumber,
        password,
      }),
    };

    const response = await fetch(`${BASE_URL}api/users/login`, requestOptions);
    const json = await response.json();

    if (response.ok) {
      console.log(json.token);
      setErrorText('');
      AsyncStorage.setItem('AccessToken', json.token);
      navigation.replace('Home');
    } else {
      console.log(json.message);
      setErrorText(`*${json.message}`);
    }
  };

  const loginFormSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        {
          message: 'Phone number is not valid',
        },
      )
      .required('Please Enter Phone Number'),
    password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
        message: 'Please create a stronger password',
      })
      .required('Please Create a password'),
  });

  return (
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
      }}
      validationSchema={loginFormSchema}
      onSubmit={async values => {
        await loginUser(values);
      }}>
      {formikProps => (
        <View style={styles.card}>
          <BackgroundCard>
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
              Login
            </Button>
          </BackgroundCard>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  input: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  helpText: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 100,
    marginVertical: 20,
  },
});
