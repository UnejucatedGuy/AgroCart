import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundCard from '../BgCard';

const StatCard = props => {
  return (
    <View>
      <BackgroundCard style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </BackgroundCard>
    </View>
  );
};

export default StatCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'normal',
    padding: 8,
    color: '#333',
    textAlign: 'left',
    marginVertical: 2,
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#333',
    textAlign: 'left',
    marginVertical: 2,
  },
});
