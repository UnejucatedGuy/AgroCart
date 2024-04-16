import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import BackgroundCard from './BgCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchingBar = () => {
  return (
    <BackgroundCard>
      <View style={styles.container}>
        <Icon style={styles.icon} name="search" size={20} color="black" />
        <Text style={styles.text}>Search Items</Text>
        {/* <TextInput style={styles.text} placeholder="Search Items" /> */}
      </View>
    </BackgroundCard>
  );
};

export default SearchingBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    justifyContent: 'center',
    flex: 6,
  },
});
