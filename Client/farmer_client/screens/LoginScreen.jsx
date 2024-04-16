import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, HelperText, IconButton, TextInput} from 'react-native-paper';
import LoginForm from '../components/LoginComponents/LoginForm';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/Images/Banana.jpeg')}
          />
        </View>

        <LoginForm navigation={navigation} />
        <View style={styles.textContainer}>
          <Text>Don't have an accont</Text>
          <Text
            onPress={() => navigation.replace('SignUpScreen')}
            style={styles.btn}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
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
