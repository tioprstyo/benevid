import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import curency from './../../../config/number';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { Container, Content } from 'native-base';

class Insurance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                check: true
            };
    }

    companyPay = (users) => {
        var price = 0;
        users.basket.map((value, index) => {
            price = price + value.price.month;
        })
        return price < (users.benevid.insurance[0].limitKredit/12) ? price : users.benevid.insurance[0].limitKredit/12;
    }

    individualPay = (users) => {
        var price = 0;
        users.basket.map((value, index) => {
            price = price + value.price.month;
        })
        return price < (users.benevid.insurance[0].limitKredit/12) ? 0 : (price - (users.benevid.insurance[0].limitKredit/12));
    }

    buyInsurance = (users) => {
        let data = users;
        data.benevid.insurance[0].limitKredit = data.benevid.insurance[0].limitKredit - users.basket[0].price.year;
        if (users.basket[0].category === 'health') {
            data.catalogue.health.push(users.basket[0]);
        } else {
            data.catalogue.life.push(users.basket[0]);
        }
        data.basket = [];
        this.props.onTodoClick(data);
        this.props.navigation.navigate('SuccessConfirmation')
    }
    
    render() {
        const { users } = this.props;
        return (
            <Container>
                {users.basket.length > 0 ?
                    <Content contentContainerStyle={{ backgroundColor: '#f4f7f9', flex: 1 }}>
                        <ScrollView contentContainerStyle={{ flexGrow: 0.5, justifyContent: 'center' }}>
                            <View style={styles.InsurancePage}>
                                {users.basket.map((value, index) => {
                                    return (
                                        <TouchableOpacity activeOpacity={1} key={ index } onPress={() => this.setState({ check: !this.state.check })}>
                                            <View style={styles.cardDetail} >
                                                <View style={styles.leftCard}>
                                                    <Image
                                                        style={styles.imageCard}
                                                        source={{ uri: value.image }}
                                                    />
                                                </View>
                                                <View style={styles.rightCard}>
                                                    <Text style={styles.titleCard}>{value.title}</Text>
                                                    <Text style={styles.subtitleCard}>Mulai Dari</Text>
                                                    <Text style={styles.priceGreen}>Rp. {curency(value.price.year)}/tahun</Text>
                                                    <Text style={styles.subtitleCard}>Pertanggungan dari</Text>
                                                    <Text style={styles.priceGreen}>Rp. {curency(value.benevid)}/hari</Text>
                                                </View>
                                                <View style={styles.detailIcon}>
                                                    {this.state.check ?
                                                        <Image
                                                            style={{ width: 20, height: 20 }}
                                                            source={require('../../../assets/icon/checkList.png')}
                                                        />
                                                        : 
                                                        <Image
                                                            style={{ width: 20, height: 20 }}
                                                            source={require('../../../assets/icon/uncheck.png')}
                                                        />}
                                                </View>
                                            </View >
                                        </TouchableOpacity>
                                    )
                                })}
                                <View>
                                    {this.state.check ?
                                        <View>
                                            <View style={styles.profileStatus}>
                                                <View style={styles.leftContent}>
                                                    <Text>Perusahaan Membayar</Text>
                                                    <Text style={styles.textPrice}>Rp {curency(this.companyPay(users))}</Text>
                                                </View>
                                                <View style={styles.rightContent}>
                                                    <Text>Kamu Membayar</Text>
                                                    <Text style={styles.textPrice}>Rp 0</Text>
                                                </View>
                                            </View>
                                            <View style={styles.detail}>
                                                <View style={styles.detailList}>
                                                    <View style={styles.detailPayment}>
                                                        <Text>Perusahaan membayar / bulan</Text>
                                                    </View>
                                                    <View style={styles.detailPrice}>
                                                        <Text>Rp {curency(this.companyPay(users))}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.detailList}>
                                                    <View style={styles.detailPayment}>
                                                        <Text>{users.basket[0].title}</Text>
                                                        <Text>Individual deduktif / bulan</Text>
                                                    </View>
                                                    <View style={styles.detailPrice}>
                                                        <Text>Rp {curency(this.individualPay(users))}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.totalList}>
                                                    <View style={styles.detailPayment}>
                                                        <Text style={styles.total}>Total Pembelian / month</Text>
                                                    </View>
                                                    <View style={styles.detailPrice}>
                                                        <Text style={styles.total}>Rp {curency(this.individualPay(users) + this.companyPay(users))}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        : <View></View>}
                                </View>
                                <View style={styles.btnForm}>
                                    {this.state.check ? 
                                        <TouchableOpacity onPress={() => this.buyInsurance(users)} style={{ width: '100%' }}>
                                            <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                                <Text style={styles.btnName}>Beli Sekarang</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.buttonType}>
                                            <Text style={styles.textType} disabled={true}>Beli Sekarang</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                        </ScrollView>
                    </Content>
                    :
                    <Content contentContainerStyle={{ backgroundColor: '#f4f7f9', flex: 1 }}>
                        <ScrollView contentContainerStyle={{ flexGrow: 0.5, justifyContent: 'center' }}>
                            <View style={styles.emptyBasket}>
                                <Image
                                    style={styles.imgEmptyBasket}
                                    source={require('../../../assets/img/basket.png')}
                                />
                                <Text style={styles.emptyBasketTitle}>Kamu belum menambahkan produk asuransi</Text>
                                <Text style={styles.subEmptyBasketTitle}>Yuk! tingkatkan pembelian benefitmu dan dapatkan Benvid Points yang dapat dibelanjakan benefit lainnya</Text>
                            </View>
                        </ScrollView>
                    </Content>
                }
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