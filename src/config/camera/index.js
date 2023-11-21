import { launchCamera } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

const captureImage = async (type) => {
    let options = {
        mediaType: type,
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
        videoQuality: 'low',
        durationLimit: 30, //Video max duration in seconds
        saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    
    if (isCameraPermitted && isStoragePermitted) {
        launchCamera(options, (response) => {

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            return response;
        });
        console.log('memek');
    }
};

const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message: 'App needs camera permission',
            },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else return true;
};

const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
            },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
        }
    return false;
    } else return true;
};

export default captureImage;