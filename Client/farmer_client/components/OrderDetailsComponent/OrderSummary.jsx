import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import BackgroundCard from '../BgCard';
import OrderProductItem from './OrderProductItem';
import {Button} from 'react-native-paper';
import {BASE_URL} from '../../config/constants';

const OrderSummary = ({
  orderId,
  products,
  totalAmount,
  navigation,
  orderStatus,
}) => {
  const markDelivered = async orderId => {
    const requestOptions = {
      method: 'PUT',
      mode: 'cors',
    };

    const response = await fetch(
      `${BASE_URL}api/orders/${orderId}/delivered`,
      requestOptions,
    );
    const json = await response.json();

    if (response.ok) {
      console.log(json);
    } else {
      console.log(json.message);
    }
  };

  return (
    <View>
      <BackgroundCard>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Order Summary</Text>
          <Text style={styles.numberOfItems}>{products.length} items</Text>
        </View>
        {products.map(item => {
          return <OrderProductItem key={item._id} {...item} />;
        })}

        <View style={styles.divider} />
        <Text style={styles.priceHeading}>Price Details</Text>
        <View style={styles.headingContainer}>
          <Text style={styles.numberOfItems}>Total</Text>
          <Text style={styles.totalPrice}>₹ {totalAmount}</Text>
        </View>
        {orderStatus === 'Pending' ? (
          <Button
            style={styles.button}
            icon="package"
            mode="contained"
            onPress={() => {
              markDelivered(orderId);
              navigation.pop();
            }}
            title="Submit">
            Marked as Delivered
          </Button>
        ) : (
          <View style={styles.orderStatus}>
            <Text>{orderStatus}</Text>
          </View>
        )}
      </BackgroundCard>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  numberOfItems: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  priceHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    margin: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  button: {
    margin: 20,
  },
  orderStatus: {
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    paddingVertical: 15,
    marginHorizontal: 50,
    marginVertical: 20,
  },
});
