import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Button } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import curency from './../../config/number';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            isSignIn: props.users.isSignIn,
            img: [
                {
                    link: require('./../../assets/img/content.png'),
                    direct: 'Benefit',
                    title: 'Benefit',
                    subTitle: ''
                },
                {
                    link: require('./../../assets/img/content1.png'),
                    direct: 'MyInsurance',
                    title: 'Katalog Asuransi',
                    subTitle: ''
                },
                {
                    link: require('./../../assets/img/content2.png'),
                    direct: 'Salary',
                    title: 'Slip Gaji',
                    subTitle: ''
                },
                {
                    link: require('./../../assets/img/content3.png'),
                    direct: '',
                    title: 'Segera Hadir',
                    subTitle: 'Fitur Benefit Terbaru'
                }
            ]
        };
    }

    getAction = (item) => {
        if (this.props.users.isSignIn) {
            this.props.navigation.navigate(item.direct);
        } else {
            Alert.alert('Info', 'Kamu harus masuk terlebih dahulu');
        }
    }
    
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LinearGradient colors={['#159146', '#159146']} style={styles.header}>
                        <View style={styles.headerTitle}>
                            <Button
                                style={styles.sideBarButton}
                                transparent
                                onPress={() => this.props.navigation.openDrawer()}>
                                <Image
                                    style={styles.dots}
                                    source={require('./../../assets/img/3dots.png')}
                                />
                            </Button>
                            <Text style={styles.headerNameTitleLeft} numberOfLines={1}>Hi{this.props.users.isSignIn ? `, ${this.props.users.name}` : ''} !</Text>
                            <View style={styles.headerNameTitleRight}>
                                <Image
                                    style={styles.imgPoints}
                                    source={require('./../../assets/img/points.png')}
                                    />
                                <Text style={styles.textPoints}>{this.props.users.isSignIn ? curency(this.props.users.points) : 0} Points</Text>
                            </View>
                        </View>
                        {this.props.users.isSignIn ?
                            <View style={styles.TextDiv}>
                                <Text style={styles.headerText}>
                                    Hubungkan dengan akun perusahaan untuk meningkatkan hak kerja kamu.
                                </Text>
                            </View>
                            :
                            <View>
                                <Text style={styles.headerTextnotSignIn}>Nikmati layanan penuh pada fitur-fitur Benevid silahkan login dengan menekan tombol dibawah ini</Text>
                            </View>
                        }
                        {this.props.users.isSignIn ?
                            <View style={styles.formToken}>
                                <TextInput
                                    style={styles.formInputHome}
                                    placeholder="Masukan Token"
                                    underlineColorAndroid="transparent"
                                    value={this.state.phoneNumber}
                                    onChangeText={this.handleInputChange}
                                />
                                <TouchableOpacity style={styles.btnToken}>
                                    <Text style={styles.btnName}>Hubungkan</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('SignIn')}><Text style={styles.btnNameLogin}>Masuk</Text></TouchableOpacity>
                            </View>
                        }
                    </LinearGradient>
                    <View style={styles.content}>
                        <Text style={styles.contentTitle}>My Benefit</Text>
                        <Text style={styles.subTitle}>Optimalkan hak anda dengan mudah!</Text>
                        <View style={styles.contentImageHome}>
                            {this.state.img.map((item, index) => {
                                return (
                                    <View style={styles.contentImg} key={index}>
                                        <TouchableOpacity onPress={() => this.getAction(item)}>
                                            <View style={styles.cardContent}>
                                                <Image
                                                    style={styles.imgContent}
                                                    source={item.link}
                                                />
                                                <Text style={styles.titleCard}>{item.title}</Text>
                                                {item.subTitle ?
                                                    <Text style={styles.subTitleCard}>{item.subTitle}</Text>
                                                : <Text></Text>}
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}
export default connect(mapStateToProps)(Home);