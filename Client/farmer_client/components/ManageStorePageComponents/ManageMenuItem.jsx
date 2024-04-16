import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const ManageMenuItem = props => {
  return (
    <View>
      <View style={styles.divider} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.content}>{props.content}</Text>
        </View>
        <View style={styles.continue}>
          <Icon name="angle-right" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default ManageMenuItem;

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 4,
  },
  container: {
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
