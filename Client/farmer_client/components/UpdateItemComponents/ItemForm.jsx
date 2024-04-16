import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import BackgroundCard from '../BgCard';

const ItemForm = () => {
  return (
    <View>
      <BackgroundCard>
        <Text style={styles.title}>Product Info</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Product Name"
          placeholder="e.g. Mango"
          placeholderTextColor={'lightgrey'}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Price"
          placeholder="e.g. 300"
          placeholderTextColor={'lightgrey'}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Qauntity"
          placeholder="e.g. 100"
          placeholderTextColor={'lightgrey'}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Unit"
          placeholder="e.g. kg"
          placeholderTextColor={'lightgrey'}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Category"
          placeholder="e.g. Fruits"
          placeholderTextColor={'lightgrey'}
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Product Description"
          placeholder="e.g. Product is Organic"
          placeholderTextColor={'lightgrey'}
        />
      </BackgroundCard>
    </View>
  );
};

export default ItemForm;

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    margin: 5,
  },
});
