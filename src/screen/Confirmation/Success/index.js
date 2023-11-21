import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from "native-base";
import { connect } from 'react-redux';
import curency from './../../../config/number';
import styles from './style';

class SuccessConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { users } = this.props;
        return (
            <Container>
                <Content>
                    <View style={{ padding: 20 }}>
                        <View style={{ marginBottom: 80 }}>
                            <TouchableOpacity style={{ width: 50 }} onPress={() => this.props.navigation.navigate('Home')}>
                                <Image
                                    style={styles.closeButton}
                                    source={require('../../../assets/icon/close.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/1B8257B5-5022-4709-9992-DB8E36EC199F.png' }} />
                            <Text style={styles.title}>Yeay, pembelian berhasil</Text>
                            <Text style={styles.subtitle}>Kamu telah berhasil melakukan pembelian produk asuransi berikut ini</Text>
                        </View>
                        <View style={styles.profileStatus} >
                            <View style={styles.listBenefitLeft}>
                                <Image
                                    style={styles.listItemImg}
                                    source={{ uri: users.catalogue.life.length > 0 ? users.catalogue.life[0].image : users.catalogue.health[0].image }}
                                />
                            </View>
                            <View style={styles.listBenefitRight}>
                                <Text style={styles.titleCard}>{users.catalogue.life.length > 0 ? users.catalogue.life[0].title : users.catalogue.health[0].title}</Text>
                                <Text style={styles.subtitleCard}>Mulai Dari</Text>
                                <Text style={styles.priceGreen}>Rp. {curency(users.catalogue.life.length > 0 ? users.catalogue.life[0].price.year : users.catalogue.health[0].price.year)}/annum</Text>
                                <Text style={styles.subtitleCard}>Daily Coverage dari</Text>
                                <Text style={styles.priceGreen}>Rp. {curency(users.catalogue.life.length > 0 ? users.catalogue.life[0].benevid : users.catalogue.health[0].benevid)}/hari</Text>
                            </View>
                            <View style={styles.detailIcon}>
                                <TouchableOpacity style={styles.buttonDetail} onPress={() => this.props.navigation.navigate('MyInsurance')}>
                                    <Text style={styles.textDetailButton}>Lihat Polis</Text>
                                </TouchableOpacity>
                            </View>
                        </View >
                    </View>
                </Content>
           </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

export default connect(mapStateToProps)(SuccessConfirmation);