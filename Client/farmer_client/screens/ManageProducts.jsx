import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchingBar from '../components/SearchingBar';
import EditProductItem from '../components/ManageProductsComponents/EditProductItem';
import {Button, Searchbar} from 'react-native-paper';
import {BASE_URL} from '../config/constants';

const ManageProducts = ({navigation, route}) => {
  const {userId} = route.params;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState([]);
  const [oldProducts, setOldProducts] = React.useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}api/products/owner/${userId}`);
    const json = await response.json();
    if (response.ok) {
      setProducts(json);
      setOldProducts(json);
      console.log(json);
    } else {
      console.log('something went wrong in flat list');
    }
  };
  useEffect(() => {
    fetchProducts();
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
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          //renderItem={EditProductItem}
          renderItem={({item}) => (
            <EditProductItem item={item} navigation={navigation} />
          )}
          keyExtractor={item => item._id}
        />
      </View>
      <View style={styles.addBtn}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => {
            navigation.navigate('AddNewProduct', {userId});
          }}
          title="addItem">
          Add New Product
        </Button>
      </View>
    </View>
  );
};

export default ManageProducts;

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
    padding: 20,
  },
  listContainer: {
    flex: 1,
  },
});
