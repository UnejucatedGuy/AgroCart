import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import NewProductForm from '../components/AddNewProductComponent/NewProductForm';
import AddProductImage from '../components/AddNewProductComponent/AddProductImage';

const AddNewProduct = ({navigation, route}) => {
  const {userId} = route.params;
  return (
    <View>
      <ScrollView>
        <NewProductForm userId={userId} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default AddNewProduct;

const styles = StyleSheet.create({});
