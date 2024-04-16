import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, Button} from 'react-native-paper';
import BackgroundCard from '../BgCard';

const EditProductImage = () => {
  return (
    <View>
      <BackgroundCard style={styles.card}>
        <Image
          source={require('../../assets/Images/testImg.png')}
          style={styles.productImage}
        />
        <View style={styles.editIcon}>
          <IconButton
            icon="camera"
            iconColor={'blue'}
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </BackgroundCard>
    </View>
  );
};

export default EditProductImage;

const styles = StyleSheet.create({
  card: {
    position: 'relative',
  },
  productImage: {
    height: 200,
    width: '100%',
    borderRadius: 20,
  },
  editIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 25,
    right: 0,
    bottom: 0,
    marginRight: 15,
    marginBottom: 15,
  },
});
