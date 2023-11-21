import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import curency from './../../config/number';

class BenefitCard extends React.Component {
    
    constructor(props) {
        super(props);
            this.state = {};
    }
    
    render() {
        return (
            <View style={styles.profileStatus} >
                <View style={styles.listBenefitLeft}>
                    <Image
                        style={styles.listItemImg}
                        source={{ uri: this.props.listCard.image }}
                    />
                    <Text style={styles.titleCardImg}>{this.props.listCard.title}</Text>
                </View>
                <View style={styles.listBenefitRight}>
                    <Text style={styles.titleCard}>Kredit tersedia</Text>
                    <Text style={styles.priceCard}>Rp {curency(this.props.listCard.limitKredit)} / tahun</Text>
                    <Text style={styles.titleCard}>Periode</Text>
                    <Text style={styles.periodeCard}>{this.props.listCard.periode}</Text>
                </View>
                <View style={styles.detailIcon}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('./../../assets/icon/arrow-right.png')}
                    />
                </View>
            </View >
        );
    }
}
export default BenefitCard;