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
import BackgroundCard from '../BgCard';
import {IconButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../config/permissions';

const AddProductImage = () => {
  const [changedImage, SetchangedImage] = useState(
    '../../assets/Images/Banana.jpeg',
  );
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

  const onCamera = async () => {
    const response = await ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
      freeStyleCropEnabled: true,
    });
    console.log('hii');
    // .then(image => {
    //   SetchangedImage(image);
    //   setUploadedStatus(true);
    //console.log(image);
    //});
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      freeStyleCropEnabled: false,
    }).then(image => {
      setUploadedStatus(true);
      SetchangedImage(image);
      //console.log(image);
    });
  };

  return (
    <View>
      <BackgroundCard style={styles.card}>
        <Image source={changedImage} style={styles.productImage} />

        {/* <>
          {UploadedStatus === false ? (
            <Image
              source={require('../../assets/Images/Banana.jpeg')}
              style={styles.productImage}
            />
          ) : (
            <Image source={{uri: changedImage}} style={styles.productImage} />
          )}
        </> */}

        <View style={styles.editIcon}>
          <IconButton
            icon="camera"
            iconColor={'blue'}
            size={30}
            onPress={onSelectImage}
          />
        </View>

        {/* <Pressable
          onPress={onSelectImage}
          style={({pressed}) => [
            {
              backgroundColor: pressed
                ? 'rgba(120, 120, 120, 0.2)'
                : 'rgba(0, 0, 0, 0)',
            },
            styles.c,
          ]}
          android_ripple={{color: 'rgba(120, 120, 120, 0.3)'}}
          children={() => (
            <>
              {UploadedStatus === false ? (
                <Image
                  source={require('../../assets/Images/Banana.jpeg')}
                  style={styles.productImage}
                />
              ) : (
                <Image
                  source={{uri: changedImage}}
                  style={styles.productImage}
                />
              )}
            </>
          )}></Pressable> */}
      </BackgroundCard>
    </View>
  );
};

export default AddProductImage;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
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
