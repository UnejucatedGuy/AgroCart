import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });
  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('AccessToken');
    if (!dataToken) {
      navigation.replace('LoginScreen');
    } else {
      navigation.replace('ManageStore');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgriCart</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
