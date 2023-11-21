import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';


class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            about: [
                'Syarat & Ketentuan', 'Terms of Use', 'Privacy Policy'
            ]
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.forceUpdate();
        })
    }
    
    componentWillUnmount() {
        this.focusListener.remove();
    }

    logout = () => {
        let data = this.props.users;
        data.isSignIn = false;
        this.props.onTodoClick(data);
        this.props.navigation.push('Home');
    }
    
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
                        <View style={styles.namEmail}>
                            <Text style={styles.titleName}>{this.props.users.name}</Text>
                            <Text style={styles.titleEmail}>{this.props.users.email}</Text>
                        </View>
                        <View style={styles.iconSpace}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
                                <Image
                                    source={require('./../../../assets/icon/pencil.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.profileStatus}>
                        <View style={styles.leftContent}>
                            <Text style={styles.textTitle}>Benevid Points</Text>
                            <Text style={styles.textSubTitle}>Tingkatkan benefitmu sekarang.</Text>
                        </View>
                        <View style={styles.rightContent}>
                            <Image
                                style={styles.imgPoints}
                                source={require('./../../../assets/img/points.png')}
                                />
                            <Text style={styles.textPoints}>{this.props.users.points} Points</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.titleCardProfile}>
                            <Text style={styles.titleNameCard}>Upload Identitas Diri</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditIdCard')}>
                                <Text style={styles.titleAction}>Ubah</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileStatus}>
                            <View style={styles.idCardLeft}>
                                <Image
                                    style={styles.idCardImg}
                                    source={require('./../../../assets/icon/id_card.png')}
                                />
                            </View>
                            <View style={styles.idCardRight}>
                                <Text style={styles.textTitle}>Tipe Kartu Identitas</Text>
                                <Text style={styles.textSubTitle}>000000-00-000000-0000</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.titleCardProfile}>
                            <Text style={styles.titleNameCard}>Info Akun Bank</Text>
                            <Text style={styles.titleAction}>Ubah</Text>
                        </View>
                        <View style={styles.profileStatus}>
                            <View style={styles.leftContent}>
                                <Text style={styles.textTitle}>Nama Bank</Text>
                                <Text style={styles.textSubTitle}>0000000</Text>
                                    <Text style={styles.textSubTitle}>Nama pemilik rekening</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.titleCardProfile}>
                            <Text style={styles.titleNameCard}>Tentang Benevid</Text>
                        </View>
                        <View style={styles.aboutList}>
                            {this.state.about.map((item, index) => {
                                return (
                                    <View style={styles.listAbout} key={ index }>
                                        <Text style={styles.textTitleAbout}>{item}</Text>
                                        <Image
                                            style={styles.imgArrow}
                                            source={require('./../../../assets/icon/arrow-right.png')}
                                        />
                                    </View>
                                
                                )
                            })}
                        </View>
                    </View>
                    <View style={styles.btnForm}>
                        <TouchableOpacity style={styles.btnSignIn} onPress={() => this.logout()}>
                        <Text style={styles.btnName}>Logout</Text>
                        </TouchableOpacity>
                    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);