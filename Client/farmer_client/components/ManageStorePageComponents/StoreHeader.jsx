import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StoreHeader = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.storeName}>
          {props.storeName || 'Vrukshvalli Farm'}
        </Text>
        <Text style={styles.storeDescription}>
          {props.storeDescription || 'Organic Products Available'}
        </Text>
        <Text style={styles.editStoreInfo}>Edit Store Info</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/Images/farmerAvatar.jpg')}
          style={styles.circularImage}
        />
      </View>
    </View>
  );
};

export default StoreHeader;

const styles = StyleSheet.create({
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginVertical: 2,
  },
  storeDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333333',
    textAlign: 'left',
    marginVertical: 2,
  },
  editStoreInfo: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#1e90ff',
    textAlign: 'left',
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignContent: 'center',
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
