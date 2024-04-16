import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundCard from '../BgCard';

function OrderItem({
  item: {
    _id,
    userId: {name},
    products,
    orderDate,
    totalAmount,
    orderStatus,
    phoneNumber,
  },
  navigation,
}) {
  return (
    <BackgroundCard>
      <View
        style={styles.container}
        onTouchStart={() => {
          navigation.navigate('OrderDetails', {
            _id,
            name,
            products,
            totalAmount,
            orderStatus,
            orderDate,
            phoneNumber,
          });
        }}>
        <View style={styles.leftContainer}>
          <Text style={styles.customerName}>{name}</Text>
          <Text style={styles.orderNumber}>Order No.</Text>
          <Text style={styles.orderId}>{_id}</Text>

          <Text style={styles.numberOfProducts}>{products.length} units</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.orderDate}>{orderDate}</Text>
          <Text style={styles.totalPrice}>₹ {totalAmount}</Text>
          <View
            style={
              orderStatus != 'Pending'
                ? styles.statusGreenContainer
                : styles.statusRedContainer
            }>
            <Text style={styles.orderStatus}>{orderStatus}</Text>
          </View>
        </View>
      </View>
    </BackgroundCard>
  );
}

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  orderNumber: {
    fontSize: 16,
    color: '#333',
    margin: 2,
  },
  orderId: {
    fontSize: 10,
    color: '#333',
    margin: 2,
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    margin: 2,
  },
  numberOfProducts: {
    fontSize: 14,
    color: '#333',
    margin: 2,
  },
  orderDate: {
    fontSize: 12,
    color: '#333',
    margin: 2,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    margin: 2,
  },
  statusGreenContainer: {
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    padding: 5,
    paddingHorizontal: 16,
    borderRadius: 5,
    margin: 2,
  },
  statusRedContainer: {
    backgroundColor: 'lightred',
    textAlign: 'center',
    padding: 5,
    paddingHorizontal: 16,
    borderRadius: 5,
    margin: 2,
  },
  orderStatus: {
    color: 'darkgreen',
    textAlign: 'center',
  },
});
