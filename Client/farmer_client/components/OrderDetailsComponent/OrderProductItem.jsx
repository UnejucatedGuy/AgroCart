import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BASE_URL} from '../../config/constants';

const OrderProductItem = ({
  product: {name, price, imageUrl, unit},
  quantity,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${BASE_URL}${imageUrl}`}}
        style={styles.productImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>₹ {price}</Text>
          <Text style={styles.productQuantity}>×</Text>
          <Text style={styles.productQuantity}>
            {quantity} {unit}
          </Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalPrice}>₹ {price * quantity}</Text>
      </View>
    </View>
  );
};

export default OrderProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImage: {
    height: 60,
    width: 80,
    borderRadius: 6,
  },
  textContainer: {
    flex: 5,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  totalContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  productQuantity: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
