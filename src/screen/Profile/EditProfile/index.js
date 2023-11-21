import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, PermissionsAndroid } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Radio, ListItem } from 'native-base';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import camera from './../../../config/camera';
import RBSheet from "react-native-raw-bottom-sheet";
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { connect } from 'react-redux';


class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            about: [
                'Syarat & Ketentuan', 'Terms of Use', 'Privacy Policy'
            ],
            name: '',
            phoneNumber: '',
            form: '',
            email: '',
            birthday: '',
            gender: true,
            image: null,
        };
    }

    componentDidMount() {
        const { users } = this.props;
        this.setState({
            name: users.name,
            phoneNumber: users.phoneNumber.slice(3),
            email: users.email,
            birthday: users.birthday,
            gender: users.gender.includes('laki') ? true : false,
        });
    }

    saveEdit = (val) => {
        let data = this.props.users;
        if (val === 'name') {
            data.name = this.state.name;
        }
        if (val === 'phone') {
            data.phoneNumber = '+62' + (this.state.phoneNumber).toString();
        }
        if (val === 'email') {
            data.email = this.state.email;
        }
        if (val === 'gender') {
            data.gender = this.state.gender ? 'Laki-laki' : 'Perempuan';
        }
        this.props.onTodoClick(data);
        this.forceUpdate();
        this.RBSheet.close();
    };

    openPopup = (val) => {
        this.setState({ form: val });
        this.RBSheet.open()
    }

    handleInputName = (value) => {
        this.setState({
            name: value,
            errorName: '',
        });
        
        if (value.length == 0) {
            this.setState({
                errorName: 'Nama lengkap dibutuhkan'
            });
        } else {
            if (value.length < 3) {
                this.setState({
                    errorName: 'Masukan setidaknya 3 huruf'
                });    
            }
        }
    }

    handleInputNumber = (numb) => {
        if (numb.length === 0) {
            this.setState({
                error: 'Nomor ponsel dibutuhkan',
                phoneNumber: ''
            });
        } else if (/^\d+$/.test(numb)) {
        this.setState({
            phoneNumber: numb,
            error: ''
        });
        
        if (this.state.phoneNumber.length < 9) {
            this.setState({
                error: 'Setidaknya masukan 9 digit nomor ponselmu',
                });
            }
        }
    }

    handleInputEmail = (value) => {
        this.setState({
            email: value,
            errorEmail: '',
        });
        
        if (value.length == 0) {
            this.setState({
                errorEmail: 'Email kantor dibutuhkan'
            });
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(value) === false) {
                this.setState({
                    errorEmail: 'Email harus besertakan ‘@‘, ‘.com’, ‘.co.id’ atau ‘.id’'
                });
            }
        }
    }

    handleSetDate = (bind) => {
        const date = Moment(bind).format("MMMM DD, YYYY");
        this.setState({
            birthday: date,
        });
        let data = this.props.users;
        data.birthday = date;
        this.props.onTodoClick(data);
        this.forceUpdate();
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
                this.props.navigation.navigate('ImagePreviewProfile', { image: response, type: 'camera' });
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
            this.props.navigation.navigate('ImagePreviewProfile', { image: response, type: 'gallery' });
        });
    };

    
    render() {
        return (
            <View style={styles.myProfilePage}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profileName}>
                        {this.props.users.imageProfile ? 
                            <Image
                                source={{ uri: this.props.users.imageProfile }}
                                style={styles.imgProfile}
                            />
                        : 
                            <Image
                                source={require('./../../../assets/icon/upload_foto.png')}
                                style={styles.imgProfile}
                            />
                        }
                        <View style={styles.iconSpace}>
                            <TouchableOpacity onPress={() => this.openPopup('photo')}>
                                <Image
                                    source={require('./../../../assets/icon/edit_pic_button.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.titleCardProfile}>
                            <Text style={styles.titleNameCard}>Data Diri</Text>
                        </View>
                        <View style={styles.aboutList}>
                            <View style={styles.listAbout}>
                                <View style={styles.textTitleAbout}>
                                    <Text style={styles.textSubTitle}>Nama Lengkap</Text>
                                    <Text style={styles.textValue}>{this.props.users.name}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.openPopup('name')}>
                                    <Text style={styles.changaProfile}>Ubah</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listAbout}>
                                <View style={styles.textTitleAbout}>
                                    <Text style={styles.textSubTitle}>Tanggal Lahir</Text>
                                    <Text style={styles.textValue}>{this.props.users.birthday}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.openPopup('date')}>
                                    <Text style={styles.changaProfile}>Ubah</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listAbout}>
                                <View style={styles.textTitleAbout}>
                                    <Text style={styles.textSubTitle}>Jenis Kelamin</Text>
                                    <Text style={styles.textValue}>{this.props.users.gender}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.openPopup('gender')}>
                                    <Text style={styles.changaProfile}>Ubah</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listAbout}>
                                <View style={styles.textTitleAbout}>
                                    <Text style={styles.textSubTitle}>No. Ponsel</Text>
                                    <Text style={styles.textValue}>{this.props.users.phoneNumber}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.openPopup('phone')}>
                                    <Text style={styles.changaProfile}>Ubah</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listAbout}>
                                <View style={styles.textTitleAbout}>
                                    <Text style={styles.textSubTitle}>Email</Text>
                                    <Text style={styles.textValue}>{this.props.users.email}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.openPopup('email')}>
                                    <Text style={styles.changaProfile}>Ubah</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={330}
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
                        {this.state.form === 'name' ?
                            <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#333333', fontSize: 20, marginBottom: 20 }}>Ubah Nama</Text>
                                <Text style={{ color: '#36454f', textAlign: 'left', fontSize: 12, marginBottom: 20, paddingLeft: 10 }}>
                                    Kamu hanya bisa mengubah nama dalam 1 kali, pastikan nama yang kamu masukan benar.
                                </Text>
                                <View style={{ marginBottom: 20, flex: 1, width: '100%' }}>
                                    <Text style={styles.titleBox}>Nama Lengkap</Text>
                                    <View style={styles.sectionStyle}>
                                        <TextInput
                                            style={styles.formInputName}
                                            placeholder=""
                                            underlineColorAndroid="transparent"
                                            value={this.state.name}
                                            onChangeText={this.handleInputName}
                                        />
                                    </View>
                                    <View style={styles.btnForm}>
                                        <TouchableOpacity onPress={() => this.saveEdit('name')}>
                                            <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                                <Text style={styles.btnName}>Simpan</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            : this.state.form === 'date' ? 
                                <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#333333', fontSize: 20, marginBottom: 10 }}>Ubah Tanggal Lahir</Text>
                                    <Text style={{ color: '#333333', fontWeight: 'bold', textAlign: 'center', fontSize: 12, marginBottom: 20, paddingLeft: 10 }}>
                                        {this.state.birthday}
                                    </Text>
                                    <View style={{ marginBottom: 20, flex: 1, width: '100%' }}>
                                        <DatePicker
                                            date={this.state.birthday ? new Date(this.state.birthday) : new Date()}
                                            onDateChange={this.handleSetDate}
                                            androidVariant="iosClone"
                                            mode="date"
                                        />
                                    </View>
                                </View>
                                : this.state.form === 'gender' ?
                                    <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#333333', fontSize: 20 }}>Pilih Jenis Kelamin</Text>
                                        <View style={{ width: '100%', marginVertical: 40 }}>
                                            <ListItem
                                                style={{
                                                    borderBottomWidth: 0,
                                                }}
                                            >
                                                <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'center' }}>
                                                    <Radio
                                                        selected={this.state.gender}
                                                        selectedColor={"#159146"} color={"#dadada"}
                                                        onPress={() => this.setState({ gender: !this.state.gender })}
                                                    />
                                                    <Text style={{ fontSize: 18, color: '#36454f', marginLeft: 10 }}>Laki-laki</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'center' }}>
                                                    <Radio
                                                        selected={!this.state.gender}
                                                        selectedColor={"#159146"}
                                                        color={"#dadada"}
                                                        onPress={() => this.setState({ gender: !this.state.gender })}
                                                    />
                                                    <Text style={{ fontSize: 18, color: '#36454f', marginLeft: 10 }}>Perempuan</Text>
                                                </View>
                                            </ListItem>
                                        </View>
                                        <View style={styles.btnForm}>
                                            <TouchableOpacity onPress={() => this.saveEdit('gender')}>
                                                <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                                    <Text style={styles.btnName}>Simpan</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                : this.state.form === 'phone' ?
                                <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#333333', fontSize: 20, marginBottom: 20 }}>Ubah No. Ponsel</Text>
                                    <Text style={{ color: '#36454f', textAlign: 'left', fontSize: 12, marginBottom: 20, paddingLeft: 10 }}>
                                        Pastikan nomor yang kamu masukan benar dan aktif.
                                    </Text>
                                    <View style={{ marginBottom: 20, flex: 1, width: '100%' }}>
                                        <Text style={styles.titleBox}>No. Ponsel</Text>
                                        <View style={styles.formNumber}>
                                            <Text style={styles.numbCode}>+62 </Text>
                                            <TextInput
                                                style={styles.formInputSignIn}
                                                placeholder="87888412321"
                                                underlineColorAndroid="transparent"
                                                value={this.state.phoneNumber}
                                                onChangeText={this.handleInputNumber}
                                            />
                                        </View>
                                        <View style={styles.btnForm}>
                                            <TouchableOpacity onPress={() => this.saveEdit('phone')}>
                                                <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                                    <Text style={styles.btnName}>Simpan</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                : this.state.form === 'email' ? 
                                    <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#333333', fontSize: 20, marginBottom: 20 }}>Ubah Email</Text>
                                        <Text style={{ color: '#36454f', textAlign: 'left', fontSize: 12, marginBottom: 20, paddingLeft: 10 }}>
                                            Pastikan alamat email yang kamu masukan benar dan aktif.
                                        </Text>
                                        <View style={{ marginBottom: 20, flex: 1, width: '100%' }}>
                                            <Text style={styles.titleBox}>Email</Text>
                                            <View style={styles.sectionStyle}>
                                                <TextInput
                                                    style={styles.formInputName}
                                                    placeholder=""
                                                    underlineColorAndroid="transparent"
                                                    value={this.state.email}
                                                    onChangeText={this.handleInputEmail}
                                                />
                                            </View>
                                            <View style={styles.btnForm}>
                                                <TouchableOpacity onPress={() => this.saveEdit('email')}>
                                                    <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                                        <Text style={styles.btnName}>Simpan</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                :
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
                        }
                    </RBSheet>
                </ScrollView>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);