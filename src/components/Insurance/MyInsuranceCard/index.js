import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

class InsuranceCard extends React.Component {
    
    constructor(props) {
        super(props);
            this.state = {
                card: [
                    {
                        title: 'Asuransi Jiwa',
                        image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                        limitKredit: 15000000,
                        periode: 'Oktober 2020',
                    },
                    {
                        title: 'Asuransi Mata',
                        image: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG',
                        limitKredit: 15000000,
                        periode: 'Oktober 2020',
                    }
                ]
            };
    }
    
    render() {
        return (
            <View>
                {this.state.card.map((value) => {
                    return (
                        <View style={styles.profileStatus} >
                            <View style={styles.listBenefitLeft}>
                                <Image
                                    style={styles.listItemImg}
                                    source={{ uri: value.image }}
                                />
                            </View>
                            <View style={styles.listBenefitRight}>
                                <Text style={styles.titleCard}>Kredit tersedia</Text>
                                <Text style={styles.priceCard}>Rp {value.limitKredit} / tahun</Text>
                                <Text style={styles.titleCard}>Periode</Text>
                                <Text style={styles.periodeCard}>{value.periode}</Text>
                            </View>
                            <View style={styles.detailIcon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../../assets/icon/arrow-right.png')}
                                />
                            </View>
                        </View >
                    )
                })}
            </View>
        );
    }
}
export default InsuranceCard;