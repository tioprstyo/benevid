import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import { Container, Content } from 'native-base';

class TransactionList extends React.Component {
    constructor(props) {
        super(props);
            this.state = {};
    }
    
    render() {
        const { users } = this.props;
        return (
            <Container>
                <Content contentContainerStyle={{ backgroundColor: '#f4f7f9', flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 0.5, justifyContent: 'center' }}>
                        <View style={styles.emptyBasket}>
                            <Image
                                style={styles.imgEmptyBasket}
                                source={require('../../assets/img/wallet.png')}
                            />
                            <Text style={styles.emptyBasketTitle}>Kamu belum memiliki transaksi</Text>
                            <Text style={styles.subEmptyBasketTitle}>Yuk! tingkatkan pembelian benefitmu dan dapatkan Benvid Points yang dapat dibelanjakan benefit lainnya</Text>
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

export default connect(mapStateToProps)(TransactionList);