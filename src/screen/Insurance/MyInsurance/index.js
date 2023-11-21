import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Content } from "native-base";
import { connect } from 'react-redux';
import curency from './../../../config/number';
import styles from './style';

class Insurance extends React.Component {
    constructor(props) {
        super(props);
            this.state = {};
    }
    
    render() {
        const { users } = this.props;
        return (
            <Container style={styles.MyInsurance}>
                <Content>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.profileStatus}>
                            <View style={styles.leftContent}>
                                <Text style={styles.textTitle}>Dana Asuransiku</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Text>Tersedia</Text>
                                <Text style={styles.textPrice}>Rp {curency(users.benevid.insurance[0].limitKredit)}/tahun</Text>
                            </View>
                        </View>
                        <View>
                            { users.catalogue.health.length > 0 || users.catalogue.life.length > 0 ?
                            <View>
                                {users.catalogue.health.length > 0 ?
                                    <View>
                                        <Text style={styles.topic}>Health Insurance</Text>
                                        <View style={styles.cardMyInsurance} >
                                            <View style={styles.listMyInsuranceLeft}>
                                                <Image
                                                    style={styles.listItemImg}
                                                    source={{ uri: users.catalogue.health[0].image }}
                                                />
                                            </View>
                                            <View style={styles.listMyInsuranceRight}>
                                                <Text style={styles.insuranceName}>{users.catalogue.health[0].title}</Text>
                                                <Text style={styles.titleCard}>Polis Plan G no:</Text>
                                                <Text style={styles.priceCard}>CGN201119234</Text>
                                                <Text style={styles.titleCard}>Periode</Text>
                                                <Text style={styles.priceCard}>{users.catalogue.health[0].periode}</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                    <TouchableOpacity style={styles.buttonBasket}>
                                                        <Text style={styles.textBasketButton}>Cek Detail</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.buttonDetail}>
                                                        <Text style={styles.textDetailButton}>Klaim</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View >
                                    </View>
                                    : <View></View>}
                                {users.catalogue.life.length > 0 ?
                                    <View>
                                        <Text style={styles.topic}>life Insurance</Text>
                                        <View style={styles.cardMyInsurance} >
                                            <View style={styles.listMyInsuranceLeft}>
                                                <Image
                                                    style={styles.listItemImg}
                                                    source={{ uri: users.catalogue.life[0].image }}
                                                />
                                            </View>
                                            <View style={styles.listMyInsuranceRight}>
                                                <Text style={styles.insuranceName}>{users.catalogue.life[0].title}</Text>
                                                <Text style={styles.titleCard}>Polis Plan G no:</Text>
                                                <Text style={styles.priceCard}>CGN201119234</Text>
                                                <Text style={styles.titleCard}>Periode</Text>
                                                <Text style={styles.priceCard}>{users.catalogue.life[0].periode}</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                    <TouchableOpacity style={styles.buttonBasket}>
                                                        <Text style={styles.textBasketButton}>Cek Detail</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.buttonDetail}>
                                                        <Text style={styles.textDetailButton}>Klaim</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View >
                                    </View>
                                        : <View></View>}
                            </View>
                                :
                                <View>
                                    <View style={styles.emptyBasket}>
                                        <Image
                                            style={styles.imgEmptyBasket}
                                            source={require('../../../assets/img/wallet.png')}
                                        />
                                        <Text style={styles.emptyBasketTitle}>Kamu belum memiliki Asuransi</Text>
                                        <Text style={styles.subEmptyBasketTitle}>Yuk! tingkatkan hak kinerjamu dengan membelanjakan produk-produk asuransi yang tersedia.</Text>
                                    </View>
                                </View>}
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

export default connect(mapStateToProps)(Insurance);