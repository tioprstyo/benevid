import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
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
                <View style={styles.recomendedTitle}>
                    <Text style={styles.titlePackage}>Paket Terlaris Untukmu</Text>
                    <TouchableOpacity style={styles.allList}>
                        <Text style={styles.allList}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    {this.props.insuranceRecomended.map((value, index) => {
                        return (
                            <View style={styles.profileStatus} key={index}>
                                <View style={styles.listBenefitLeft}>
                                    <Image
                                        style={styles.listItemImg}
                                        source={{ uri: value.image }}
                                    />
                                </View>
                                <View style={styles.listBenefitRight}>
                                    <Text style={styles.titleCard}>{value.title}</Text>
                                    <Text style={styles.periodeCard}>Mulai dari</Text>
                                    <Text style={styles.priceCard}>Rp {curency(value.price.year)}/tahun</Text>
                                </View>
                            </View >
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}
export default InsuranceCard;