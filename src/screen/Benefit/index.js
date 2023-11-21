import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content } from "native-base";
import styles from './style';
import curency from './../../config/number';
import Card from '../../components/BenefitCard/index';
import { connect } from 'react-redux';

class Benefit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <ScrollView>
                <Container style={styles.benefitPage}>
                    <Content>
                        <View style={styles.profileStatus}>
                            <View style={styles.leftContent}>
                                <Text style={styles.textTitle}>Hi, { this.props.users.name } !</Text>
                                <Text style={styles.textSubTitle}>Tingkatkan Benefitmu sekarang</Text>
                            </View>
                            <View style={styles.rightContent}>
                                <Image
                                    style={styles.imgPoints}
                                    source={require('./../../assets/img/points.png')}
                                    />
                                <Text style={styles.textPoints}>{curency(this.props.users.points)} Points</Text>
                            </View>
                        </View>
                        {this.props.users.benevid.insurance.map((item, index) => {
                            return (
                                <TouchableOpacity key={ index } onPress={() => this.props.navigation.navigate(item.type)}>
                                    <Card listCard={item} />
                                </TouchableOpacity>
                            )
                        })}
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}
export default connect(mapStateToProps)(Benefit);