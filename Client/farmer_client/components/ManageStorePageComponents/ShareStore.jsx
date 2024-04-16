import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundCard from '../BgCard';
import {Button} from 'react-native-paper';
import Share from 'react-native-share';

const ShareStore = props => {
  const shareStoreLink = async userId => {
    console.log('prssed');
    const shareOptions = {
      message: `http://localhost:3000/store/${userId}`,
    };
    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(JSON.parse(shareResponse));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.shareButton}>
        <View style={styles.buttonContent}>
          <Icon name="share" size={20} color="#fff" />
          <Text style={styles.shareText}>Share online store</Text>
        </View>
      </TouchableOpacity> */}
      <Button
        icon="share"
        mode="contained"
        title="button"
        onPress={() => {
          shareStoreLink(props.userId);
        }}>
        Share Online Store
      </Button>
    </View>
  );
};

export default ShareStore;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginHorizontal: 60,
  },
});
