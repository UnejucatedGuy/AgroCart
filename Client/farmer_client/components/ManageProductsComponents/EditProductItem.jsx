import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BackgroundCard from '../BgCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BASE_URL} from '../../config/constants';
const EditProductItem = props => {
  return (
    <BackgroundCard>
      <View style={styles.container}>
        <Image
          source={{uri: `${BASE_URL}${props.item.imageUrl}`}}
          style={styles.productImg}
        />
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{props.item.name}</Text>
          <Text style={styles.productPrice}>₹ {props.item.price}</Text>
          <Text style={styles.productQuantity}>
            {props.item.quantity} {props.item.unit}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          {/* <Icon name="share" size={20} color="#fff" /> */}
          <Text>:</Text>
        </View>
      </View>
    </BackgroundCard>
  );
};

export default EditProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImg: {
    height: 80,
    width: 120,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#333',
  },
  productQuantity: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333',
  },
  buttonsContainer: {
    margin: 5,
  },
});
