import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import ItemForm from '../components/UpdateItemComponents/ItemForm';
import EditProductImage from '../components/UpdateItemComponents/EditProductImage';

const UpdateItem = () => {
  const [text, setText] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{}}>
          <EditProductImage />
          <ItemForm />
          <Button
            style={styles.saveBtn}
            icon="camera"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Save
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateItem;

const styles = StyleSheet.create({
  saveBtn: {
    marginHorizontal: 100,
    marginVertical: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
