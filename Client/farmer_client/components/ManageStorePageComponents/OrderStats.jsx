import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundCard from '../BgCard';
import StatCard from './StatCard';

const OrderStats = ({userId}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.title}>Total Orders</Text>
          <Text style={styles.content}>30</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Open Orders</Text>
          <Text style={styles.content}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.title}>Store Views</Text>
          <Text style={styles.content}>17</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Completed Orders</Text>
          <Text style={styles.content}>27</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderStats;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    justifyContent: 'space-evenly',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 6,
    marginVertical: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'normal',
    padding: 8,
    color: '#333',
    textAlign: 'left',
    marginVertical: 2,
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#333',
    textAlign: 'left',
    marginVertical: 2,
  },
});
