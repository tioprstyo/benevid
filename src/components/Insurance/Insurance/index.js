import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import curency from './../../../config/number';

class InsuranceCard extends React.Component {
    
    constructor(props) {
        super(props);
            this.state = {};
    }
    
    render() {
        return (
            <View>
                {this.props.insuranceList.map((value, index) => {
                    return (
                        <View style={styles.profileStatus} key={index} >
                            <View style={styles.listBenefitLeft}>
                                <Image
                                    style={styles.listItemImg}
                                    source={{ uri: value.image }}
                                />
                            </View>
                            <View style={styles.listBenefitRight}>
                                <Text style={styles.insuranceName}>{value.title}</Text>
                                <Text style={styles.titleCard}>Mulai dari</Text>
                                <Text style={styles.priceCard}>Rp {curency(value.price.year)}/tahun</Text>
                                <Text style={styles.titleCard}>Pertanggungan dari</Text>
                                <Text style={styles.priceCard}>Rp {curency(value.benevid)}/hari</Text>
                            </View>
                            <View style={styles.detailIcon}>
                                <TouchableOpacity onPress={() => { this.props.onChange(value, 'basket') }} key={ `basket${index}` } style={styles.buttonBasket}>
                                    <Text adjustsFontSizeToFit style={styles.textBasketButton}>+ Keranjang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.props.onChange(value, 'detail') }} key={ `detail${index}` } style={styles.buttonDetail}>
                                    <Text style={styles.textDetailButton}>Cek Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View >
                    )
                })}
            </View>
        );
    }
}
export default InsuranceCard;