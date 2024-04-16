import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SignUpForm from '../components/SignUpComponents/SignUpForm';

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <SignUpForm navigation={navigation} />
        <View style={styles.textContainer}>
          <Text>Already have an Accont ?</Text>
          <Text
            onPress={() => navigation.replace('LoginScreen')}
            style={styles.btn}>
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  imageContainer: {
    backgroundColor: 'red',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 80,
  },
  btn: {
    color: 'red',
    marginHorizontal: 10,
  },
});
