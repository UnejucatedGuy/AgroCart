import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundCard from '../BgCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const ManageMenu = ({navigation, userId}) => {
  return (
    <View>
      <BackgroundCard>
        <Text style={styles.menubarTitle}>Quick Actions</Text>
        <View
          onTouchEnd={() => {
            navigation.navigate('ManageProducts', {userId: userId});
          }}>
          <View style={styles.divider} />
          <View style={styles.itemContainer}>
            <Image
              source={require('../../assets/Images/manageProduct.jpg')}
              style={styles.circularImage}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Manage Products</Text>
              <Text style={styles.content}>manage your products here</Text>
            </View>
            <View style={styles.continue}>
              <Icon name="angle-right" size={20} color="black" />
            </View>
          </View>
        </View>

        <View
          onTouchEnd={() => {
            navigation.navigate('ManageOrders', {userId: userId});
          }}>
          <View style={styles.divider} />
          <View style={styles.itemContainer}>
            <Image
              source={require('../../assets/Images/manageOrder.jpg')}
              style={styles.circularImage}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Manage Orders</Text>
              <Text style={styles.content}>manage your orders here</Text>
            </View>
            <View style={styles.continue}>
              <Icon name="angle-right" size={20} color="black" />
            </View>
          </View>
        </View>
      </BackgroundCard>
    </View>
  );
};

export default ManageMenu;

const styles = StyleSheet.create({
  menubarTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333333',
    textAlign: 'left',
    margin: 8,
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingLeft: 10,
    alignContent: 'center',
  },
  circularImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 5,
  },
  titleContainer: {
    flex: 2,
    marginLeft: 25,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  content: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#333333',
    textAlign: 'left',
  },
  continue: {
    flex: 1,
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    textAlign: 'center',
  },
});
