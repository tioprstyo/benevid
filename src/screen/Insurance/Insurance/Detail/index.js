import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, Modal } from 'react-native';
import { Button, Container, Content } from 'native-base';
import { Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import curency from './../../../../config/number';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

class Insurance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    buyInsurance = (val) => {
        let data = this.props.users;
        if (data.basket.length === 0) {
            data.basket.push(val);
            this.props.onTodoClick(data);
            this.setModalVisible(true);
            this.props.navigation.push('DetailInsurance', { data: val });
        } else {
            Alert.alert("Failed", "Hanya dapat menambahkan 1 items untuk 1 kali transaksi");
        }
    }

    backToList = () => {
        this.setModalVisible(false);
        this.props.navigation.push('Insurance');
    }

    goToBasket = () => {
        this.setModalVisible(false);
        this.props.navigation.navigate('Basket');
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    
    render() {
        const { data } = this.props.navigation.state.params;
        return (
            <Container>
                <Content contentContainerStyle={{ backgroundColor: '#f4f7f9', flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 0.5, justifyContent: 'center' }}>
                        <View style={styles.InsurancePage}>
                            <View style={styles.cardDetail} >
                                <View style={styles.leftCard}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{ uri: data.image }}
                                    />
                                </View>
                                <View style={styles.rightCard}>
                                    <Text style={styles.titleCard}>{data.title}</Text>
                                    <Text style={styles.subtitleCard}>Mulai Dari</Text>
                                    <Text style={styles.priceGreen}>Rp. {curency(data.price.year)}/tahun</Text>
                                    <Text style={styles.subtitleCard}>Pertanggungan dari</Text>
                                    <Text style={styles.priceGreen}>Rp. {curency(data.benevid)}/hari</Text>
                                </View>
                            </View >
                            <View>
                                <View>
                                    <Text style={styles.titleBox}>In-patient</Text>
                                    <View style={styles.detail}>
                                        <View style={styles.detailList}>
                                            <View style={styles.detailPayment}>
                                                <Text style={{ color: '#36454f', fontSize: 12 }}>ICU</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rp {curency(3000000)}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.detailList}>
                                            <View style={styles.detailPayment}>
                                                <Text style={{ color: '#36454f', fontSize: 12 }}>Surgical</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rp {curency(30000000)}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.detailList}>
                                            <View style={styles.detailPayment}>
                                                <Text style={{ color: '#36454f', fontSize: 12 }}>Death Compensation</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rp {curency(120000000)}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.detailList}>
                                            <View style={styles.detailPayment}>
                                                <Text style={{ color: '#36454f', fontSize: 12 }}>Daily Compensation</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rp {curency(120000000)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={styles.titleBox}>Out-patient</Text>
                                    <View style={styles.profileStatus}>
                                        <View style={styles.leftContent}>
                                            <View style={styles.detailPayment}>
                                                <Text style={{ color: '#36454f', fontSize: 12 }}>Hospitalization</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rp {curency(30000000)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={styles.titleBox}>Accidental Cover</Text>
                                    <View style={styles.profileStatus}>
                                        <View style={styles.leftContent}>
                                            <View style={styles.detailPayment}>
                                                <Text style={{ color: '#36454f', fontSize: 12 }}>Death by Accident</Text>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Rp {curency(20000000)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.btnForm}>
                                <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                    <TouchableOpacity onPress={() => this.buyInsurance(data)} style={{ flexDirection: 'row' }}>
                                        <Text style={styles.btnNameLeft}>Rp. {curency(data.price.year)}</Text>
                                        <Text style={styles.btnNameRight}>+ Keranjang</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </ScrollView>
                    <View>
                        <Overlay isVisible={this.state.modalVisible} overlayStyle={{ backgroundColor: 'transparent' }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Image
                                        style={{ width: 48, height: 56, marginBottom: 20, alignSelf: 'center' }}
                                        source={require('../../../../assets/icon/shop_icon.png')}
                                    />
                                    <Text style={{ color: '#333333', fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' }}>Tambah Produk Sukses </Text>
                                        <Text style={styles.modalText}>Kamu telah berhasil menambahkan produk ke keranjang</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Button onPress={() => this.backToList()} style={styles.btnModalList}>
                                            <Text style={styles.textModalList}>+ Product Lainnya</Text>
                                        </Button>
                                        <Button onPress={() => this.goToBasket()} style={styles.btnModalBasket}>
                                            <Text style={styles.textModalBasket}>Cek Keranjang</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </Overlay>
                    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Insurance);