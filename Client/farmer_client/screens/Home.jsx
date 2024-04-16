import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EditProductItem from '../components/ManageProductsComponents/EditProductItem';
import BackgroundCard from '../components/BgCard';
import OrderItem from '../components/ManageOrderCpmponents/OrderItem';
import {SearchBar} from 'react-native-screens';
import SearchingBar from '../components/SearchingBar';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Go to Manage Store"
          onPress={() => navigation.navigate('ManageStore')}
        />
      </View>

      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Go to Manage Orders"
          onPress={() => navigation.navigate('ManageOrders')}
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Go to Update Item"
          onPress={() => navigation.navigate('UpdateItem')}
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Go to OrderDetails"
          onPress={() => navigation.navigate('OrderDetails')}
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Go to Login"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Go to Add SignUp"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
