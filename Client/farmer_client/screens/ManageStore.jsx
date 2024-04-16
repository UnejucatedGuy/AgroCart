import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundCard from '../components/BgCard';
import StoreHeader from '../components/ManageStorePageComponents/StoreHeader';
import ShareStore from '../components/ManageStorePageComponents/ShareStore';
import OrderStats from '../components/ManageStorePageComponents/OrderStats';
import ManageMenu from '../components/ManageStorePageComponents/ManageMenu';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../config/constants';

const ManageStore = ({navigation}) => {
  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStorDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [ccessToken, setAccessToken] = useState('');

  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const accessToken = await AsyncStorage.getItem('AccessToken');
    if (!accessToken) {
      navigation.replace('LoginScreen');
    } else {
      var decoded = jwt_decode(accessToken);
      setAccessToken(accessToken);
      const response = await fetch(`${BASE_URL}api/users/${decoded.userId}`);
      const json = await response.json();

      if (response.ok) {
        setUserId(json._id);
        setStoreName(json.storeName);
        setStorDescription(json.setStorDescription);
        console.log(accessToken);
      } else {
        navigation.replace('Home');
      }
    }
  };

  return (
    <View>
      <ScrollView>
        <BackgroundCard>
          <StoreHeader
            storeName={storeName}
            storeDescription={storeDescription}
          />
        </BackgroundCard>

        <ShareStore userId={userId} />

        <OrderStats userId={userId} />
        <ManageMenu navigation={navigation} userId={userId} />
      </ScrollView>
    </View>
  );
};

export default ManageStore;

const styles = StyleSheet.create({});
