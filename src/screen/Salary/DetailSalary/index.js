import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import Pdf from 'react-native-pdf';
import styles from './style';

class DetailSalary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Container style={styles.salaryPage}>
                <Content>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.list}>
                            <Pdf
                                style={styles.pdf}
                                source={this.props.navigation.state.params.slip.file}
                                onLoadComplete={(numberOfPages,filePath)=>{
                                    console.log(`number of pages: ${numberOfPages}`);
                                }}
                                onPageChanged={(page,numberOfPages)=>{
                                    console.log(`current page: ${page}`);
                                }}
                                onError={(error)=>{
                                    console.log(error);
                                }}  
                                onPressLink={(uri)=>{
                                    console.log(`Link presse: ${uri}`)
                                }}
                                style={styles.pdf} />
                        </View>
                        <View style={styles.btnForm}>
                            <LinearGradient colors={['#159146', '#159146']} style={styles.btnUnduh}>
                                <TouchableOpacity>
                                    <Text style={styles.btnName}>Unduh</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

export default DetailSalary;