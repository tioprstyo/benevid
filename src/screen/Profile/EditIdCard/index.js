import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, PermissionsAndroid } from 'react-native';
import { Container, Content, Radio, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './style';
import { connect } from 'react-redux';


class EditIdCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: true,
            numberId: '',
            errorNumberId: '',
            errorId: ''
        };
    }

    backButton= () => {
        this.props.navigation.navigate('EditProfile');
    } 

    saveImage = () => {
        let data = this.props.users;
        data.imageProfile = this.props.navigation.state.params.image.uri;
        this.props.onTodoClick(data);
        this.props.navigation.push('EditProfile');
    }

    handleInput = (value) => {
        this.setState({
            numberId: value,
            errorNumberId: '',
        });
        
        if (value.length == 0) {
            this.setState({
                errorNumberId: 'Email kantor dibutuhkan'
            });
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(value) === false) {
                this.setState({
                    errorNumberId: 'Email harus besertakan ‘@‘, ‘.com’, ‘.co.id’ atau ‘.id’'
                });
            }
        }
    }

    uploadPhoto = () => {
        this.RBSheet.open();
    }

    captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await this.requestCameraPermission();
        let isStoragePermitted = await this.requestExternalWritePermission();
        
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
                this.RBSheet.close();
            });
        }
    };

    requestCameraPermission = async () => {
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

    requestExternalWritePermission = async () => {
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
    
    chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {

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
            this.RBSheet.close();
        });
    };
    
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <ScrollView>
                        <Text style={styles.idTypeTitle}>Tipe Kartu Identitas</Text>
                        <View style={{ width: '100%', marginBottom: 20 }}>
                            <ListItem
                                style={{
                                    borderBottomWidth: 0,
                                    marginLeft: 0,
                                }}
                            >
                                <View style={{ flexDirection: 'row', flex: 0.5 }}>
                                    <Radio
                                        selected={this.state.id}
                                        selectedColor={"#159146"} color={"#dadada"}
                                        onPress={() => this.setState({ id: !this.state.id })}
                                    />
                                    <Text style={{ fontSize: 14, color: '#36454f', marginLeft: 10 }}>E-KTP</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.5 }}>
                                    <Radio
                                        selected={!this.state.id}
                                        selectedColor={"#159146"}
                                        color={"#dadada"}
                                        onPress={() => this.setState({ id: !this.state.id })}
                                    />
                                    <Text style={{ fontSize: 14, color: '#36454f', marginLeft: 10 }}>Passport</Text>
                                </View>
                            </ListItem>
                            <Text style={styles.textError}>{this.state.errorId}</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.titleBox}>No. KTP/Passport</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style={styles.formInputId}
                                    placeholder="000000-00-000000-0000"
                                    underlineColorAndroid="transparent"
                                    value={this.state.numberId}
                                    onChangeText={this.handleInput}
                                />
                            </View>
                            <Text style={styles.textError}>{this.state.errorNumberId}</Text>
                        </View>
                        <View style={{ marginBottom: 50 }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => this.uploadPhoto()}>
                                <Image
                                    style={styles.idCardImg}
                                    source={require('./../../../assets/icon/id_card.png')}
                                />
                                <Image
                                    source={require('./../../../assets/icon/edit_pic_button.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnForm}>
                            <TouchableOpacity>
                                <LinearGradient colors={['#378E33', '#198236']} style={styles.btnIdCard}>
                                    <Text style={styles.btnName}>Simpan</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={300}
                        closeOnDragDown={true}
                        customStyles={{
                            container: {
                                backgroundColor: '#ffffff',
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                            },
                            wrapper: {
                                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            },
                            draggableIcon: {
                                backgroundColor: '#B8B8B8',
                                width: 80
                            }
                        }}
                    >
                        <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#333333', fontSize: 20, marginBottom: 50 }}>Unggah Foto</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center', height: 50 }} onPress={() => this.chooseFile('photo')}>
                                        <Image
                                            source={require('./../../../assets/icon/image_gallery.png')}
                                            style={{ width: 56, height: 50, marginBottom: 5 }}
                                        /> 
                                        <Text>Dari galeri</Text>    
                                    </TouchableOpacity>  
                                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center', height: 50 }} onPress={() => this.captureImage('photo')}>
                                        <Image
                                            source={require('./../../../assets/icon/photo_camera.png')}
                                            style={{ width: 56, height: 45, marginBottom: 10 }}
                                        />  
                                        <Text>Kamera foto</Text>
                                    </TouchableOpacity>      
                            </View>
                        </View>
                    </RBSheet>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (user) => {
      dispatch({ type: 'SET_USER', input: user });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIdCard);