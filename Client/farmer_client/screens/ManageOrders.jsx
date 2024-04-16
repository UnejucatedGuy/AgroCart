import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import OrderItem from '../components/ManageOrderCpmponents/OrderItem';
import {BASE_URL} from '../config/constants';

const ManageOrders = ({navigation, route}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [orders, setOrders] = React.useState([]);
  const [oldOrders, setOldOrders] = React.useState([]);
  const {userId} = route.params;
  const fetchOrders = async () => {
    const response = await fetch(`${BASE_URL}api/orders/farmer/${userId}`);
    const json = await response.json();
    if (response.ok) {
      setOrders(json);
      setOldOrders(json);
      console.log(json);
    } else {
      console.log('something went wrong in flat list');
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.serachContainer}>
        <Searchbar
          placeholder="Search"
          traileringIcon={'sort-variant'}
          onChangeText={query => setSearchQuery(query)}
          value={searchQuery}
          onTraileringIconPress={() => console.log('filter')}
        />
      </View>
      <View style={orders.length == 0 && styles.listContainer}>
        {orders.length != 0 ? (
          <FlatList
            data={orders}
            renderItem={({item}) => (
              <OrderItem item={item} navigation={navigation} />
            )}
            keyExtractor={item => item._id}
          />
        ) : (
          <Text>No Orders are Available</Text>
        )}
      </View>
    </View>
  );
};

export default ManageOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    bottom: 30,
    justifyContent: 'center',
  },
  serachContainer: {
    padding: 10,
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
