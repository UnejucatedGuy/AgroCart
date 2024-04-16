import {
  Alert,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, HelperText} from 'react-native-paper';
import BackgroundCard from '../BgCard';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../config/permissions';
import axios from 'axios';
import {BASE_URL} from '../../config/constants';

const NewProductForm = ({userId, navigation}) => {
  const [changedImage, SetchangedImage] = useState(null);
  const [UploadedStatus, setUploadedStatus] = useState(false);

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS === 'android') {
      Alert.alert('Upload Picture', 'Choose Option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
    })
      .then(image => {
        SetchangedImage(image);
        setUploadedStatus(true);
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onGallery = async () => {
    const response = await ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    });
    if (!response) {
      console.log('SOMETHING WENT WRONG');
    }
    setUploadedStatus(true);
    SetchangedImage(response);
    console.log(response);
  };

  const postProductData = async (
    image,
    {name, description, price, category, unit, quantity},
    owner,
  ) => {
    console.log(image.path);
    console.log(image.mime);
    const parts = image.path.split('/');
    const fileName = parts[parts.length - 1];
    console.log(fileName);
    const formData = new FormData();
    formData.append('image', {
      name: `${name}-${fileName}`,
      uri: image.path,
      type: image.mime,
    });
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('unit', unit);
    formData.append('owner', owner);
    formData.append('quantity', quantity);

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };

    const response = await fetch(
      `${BASE_URL}api/products/create`,
      requestOptions,
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log('Response:', responseData);
      navigation.goBack();
    } else {
      console.error('Request failed with status:', response);
      navigation.goBack();
    }
  };

  const productFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Product Name is Required'),
    price: Yup.number()
      .required('Price is Required')
      .positive('price should be positive'),
    quantity: Yup.number().positive().required('Required'),
    unit: Yup.string().required('Unit is Required'),
    category: Yup.string().required('category is Required'),
    description: Yup.string()
      .min(2, 'Product Discription is Too Short!')
      .max(50, 'Product Discription is Too Long!')
      .required('Product Description is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        price: '',
        quantity: '',
        unit: '',
        category: '',
        description: '',
      }}
      validationSchema={productFormSchema}
      onSubmit={values => {
        console.log(values, changedImage);
        postProductData(changedImage, values, userId);
      }}>
      {formikProps => (
        <View>
          <BackgroundCard>
            <View style={styles.card} onTouchEnd={onSelectImage}>
              <Image
                resizeMode="contain"
                source={
                  UploadedStatus
                    ? {uri: changedImage.path}
                    : require('../../assets/Images/addImage.jpg')
                }
                style={styles.productImg}
              />
            </View>

            <Text style={styles.title}>Product Info</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Product Name"
              placeholder="e.g. Mango"
              placeholderTextColor="lightgrey"
              error={formikProps.touched.name && formikProps.errors.name}
              onChangeText={formikProps.handleChange('name')}
              onBlur={formikProps.handleBlur('name')}
              value={formikProps.values.name}
            />
            <HelperText>
              {formikProps.touched.name && formikProps.errors.name}
            </HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              keyboardType="numeric"
              label="Price"
              placeholder="e.g. 300"
              placeholderTextColor="lightgrey"
              error={formikProps.touched.price && formikProps.errors.price}
              onChangeText={formikProps.handleChange('price')}
              onBlur={formikProps.handleBlur('price')}
              value={formikProps.values.price}
            />
            <HelperText>
              {formikProps.touched.price && formikProps.errors.price}
            </HelperText>

            <TextInput
              style={styles.input}
              mode="outlined"
              label="Qauntity"
              keyboardType="numeric"
              placeholder="e.g. 100"
              placeholderTextColor="lightgrey"
              error={
                formikProps.touched.quantity && formikProps.errors.quantity
              }
              onChangeText={formikProps.handleChange('quantity')}
              onBlur={formikProps.handleBlur('quantity')}
              value={formikProps.values.quantity}
            />
            <HelperText>
              {formikProps.touched.quantity && formikProps.errors.quantity}
            </HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Unit"
              placeholder="e.g. kg"
              placeholderTextColor="lightgrey"
              error={formikProps.touched.unit && formikProps.errors.unit}
              onChangeText={formikProps.handleChange('unit')}
              onBlur={formikProps.handleBlur('unit')}
              value={formikProps.values.unit}
            />
            <HelperText>
              {formikProps.touched.unit && formikProps.errors.unit}
            </HelperText>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Category"
              placeholder="e.g. Fruits"
              placeholderTextColor="lightgrey"
              error={
                formikProps.touched.category && formikProps.errors.category
              }
              onChangeText={formikProps.handleChange('category')}
              onBlur={formikProps.handleBlur('category')}
              value={formikProps.values.category}
            />
            <HelperText>
              {formikProps.touched.category && formikProps.errors.category}
            </HelperText>

            <TextInput
              style={styles.input}
              mode="outlined"
              label="Product Description"
              placeholder="e.g. Product is Organic"
              placeholderTextColor="lightgrey"
              error={
                formikProps.touched.description &&
                formikProps.errors.description
              }
              onChangeText={formikProps.handleChange('description')}
              onBlur={formikProps.handleBlur('description')}
              value={formikProps.values.description}
            />
            <HelperText>
              {formikProps.touched.description &&
                formikProps.errors.description}
            </HelperText>
            <Button
              style={styles.saveBtn}
              icon="camera"
              mode="contained"
              onPress={formikProps.handleSubmit}
              title="Submit">
              Save
            </Button>
          </BackgroundCard>
        </View>
      )}
    </Formik>
  );
};
export default NewProductForm;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    margin: 5,
  },
  saveBtn: {
    marginHorizontal: 100,
    marginVertical: 15,
  },

  productImg: {
    height: 160,
    width: 160,
    borderRadius: 10,
  },
});
