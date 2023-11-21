import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from "native-base";
import styles from './style';

class FailedConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ padding: 20 }}>
                        <View style={{ marginBottom: 80 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                                <Image
                                    style={styles.closeButton}
                                    source={require('../../../assets/icon/close.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://cdn.zeplin.io/600f2cc13f0f823eb0f419dc/assets/FB716074-C46E-46DA-97E3-B0DE25048E63.png' }} />
                            <Text style={styles.title}>Oops, maaf pembelian gagal</Text>
                            <Text style={styles.subtitle}>Terdapat kesalahan saat kamu melakukan transaksi</Text>
                        </View>
                    </View>
                </Content>
           </Container>
        );
    }
}
export default FailedConfirmation;