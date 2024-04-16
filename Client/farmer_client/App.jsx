import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import ManageStore from './screens/ManageStore';
import Home from './screens/Home';
import ManageProducts from './screens/ManageProducts';
import ManageOrders from './screens/ManageOrders';
import UpdateItem from './screens/UpdateItem';
import OrderDetails from './screens/OrderDetails';
import AddNewProduct from './screens/AddNewProduct';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ManageStore" component={ManageStore} />
          <Stack.Screen name="ManageProducts" component={ManageProducts} />
          <Stack.Screen name="ManageOrders" component={ManageOrders} />
          <Stack.Screen name="UpdateItem" component={UpdateItem} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
