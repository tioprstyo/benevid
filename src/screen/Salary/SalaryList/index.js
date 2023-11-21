import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content } from "native-base";
import { connect } from 'react-redux';
import styles from './style';

class Salary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Container style={styles.salaryPage}>
                    <Content>
                        {this.props.users.paySlip.map((value, index) => {
                            return (
                                <TouchableOpacity key={ index } onPress={() => this.props.navigation.navigate('DetailSalary', { slip: value })}>
                                    <View style={styles.list}>
                                        <Image
                                            style={styles.imgFile}
                                            source={require('./../../../assets/icon/file.png')}
                                        />
                                        <View style={styles.leftContent}>
                                            <Text style={styles.textTitle}>Periode</Text>
                                            <Text style={styles.textSubTitle}>{value.periode}</Text>
                                        </View>
                                        <View style={styles.rightContent}>
                                            <Image
                                                style={{ width: 20, height: 20 }}
                                                source={require('./../../../assets/icon/arrow-right.png')}
                                            />
                                        </View>
                                    </View>
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

export default connect(mapStateToProps)(Salary);