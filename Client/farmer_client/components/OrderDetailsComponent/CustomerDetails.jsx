import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import BackgroundCard from '../BgCard';

const CustomerDetails = ({name, phoneNumber}) => {
  return (
    <View>
      <BackgroundCard>
        <Text style={styles.heading}>Customer Details</Text>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.content}>{name}</Text>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.content}>At post kherdi</Text>
            <Text style={styles.title}>Contact No</Text>
            <Text style={styles.content}>{phoneNumber || 8767654432}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/Images/farmerAvatar.jpg')}
              style={styles.circularImage}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.editIcon}>
                <IconButton
                  icon="phone"
                  size={25}
                  onPress={() => console.log('Pressed')}
                />
              </View>
              <View style={styles.editIcon}>
                <IconButton
                  icon="message"
                  size={25}
                  onPress={() => console.log('Pressed')}
                />
              </View>
            </View>
          </View>
        </View>
      </BackgroundCard>
    </View>
  );
};

export default CustomerDetails;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 5,
    color: '#333',
    textAlign: 'left',
  },
  container: {
    flexDirection: 'row',
    padding: 20,
    paddingVertical: 10,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    marginTop: 5,
  },

  content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginVertical: 2,
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  editIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 5,
  },
});
