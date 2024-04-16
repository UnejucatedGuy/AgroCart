import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundCard from '../BgCard';

const OrderHeader = ({orderId, orderDate}) => {
  return (
    <View>
      <BackgroundCard>
        <Text style={styles.heading}>Order ID : {orderId}</Text>
        <Text style={styles.heading}>Order placed on {orderDate}</Text>
      </BackgroundCard>
    </View>
  );
};

export default OrderHeader;

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
  },
});
