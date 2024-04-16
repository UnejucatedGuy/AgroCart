import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CustomerDetails from '../components/OrderDetailsComponent/CustomerDetails';
import OrderSummary from '../components/OrderDetailsComponent/OrderSummary';
import OrderProductItem from '../components/OrderDetailsComponent/OrderProductItem';
import {Button} from 'react-native-paper';
import BackgroundCard from '../components/BgCard';
import OrderHeader from '../components/OrderDetailsComponent/OrderHeader';

const OrderDetails = ({navigation, route}) => {
  const {
    _id,
    name,
    products,
    totalAmount,
    orderStatus,
    orderDate,
    phoneNumber,
  } = route.params;
  return (
    <View>
      <ScrollView>
        <OrderHeader orderId={_id} orderDate={orderDate} />
        <CustomerDetails name={name} phoneNumber={phoneNumber} />
        <OrderSummary
          orderId={_id}
          orderStatus={orderStatus}
          products={products}
          totalAmount={totalAmount}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  statusContainer: {},
  deliverBtn: {},
});
