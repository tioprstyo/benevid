import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Container, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import styles from './style';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            errorName: '',
            errorEmail: ''
        };
    }

    onRegister = async () => {
        if (!this.state.name) {
            this.setState({
                errorName: 'Nama lengkap dibutuhkan'
            });
        } else if (!this.state.email) {
            this.setState({
                errorEmail: 'Email kantor dibutuhkan'
            })
        } else {
            let data = this.props.users;
            data.name = this.state.name;
            data.email = this.state.email;
            data.isSignIn = true;
            const pushData = await this.props.onTodoClick(data);
            if (pushData.input.email === this.state.email) {
                this.props.navigation.push('Home');
            }
        }
    };

    handleInputName = (value) => {
        this.setState({
            name: value,
            errorName: '',
        });
        
        if (value.length == 0) {
            this.setState({
                errorName: 'Nama lengkap dibutuhkan'
            });
        } else {
            if (value.length < 3) {
                this.setState({
                    errorName: 'Masukan setidaknya 3 huruf'
                });    
            }
        }
    }

    handleInputEmail = (value) => {
        this.setState({
            email: value,
            errorEmail: '',
        });
        
        if (value.length == 0) {
            this.setState({
                errorEmail: 'Email kantor dibutuhkan'
            });
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(value) === false) {
                this.setState({
                    errorEmail: 'Email harus besertakan ‘@‘, ‘.com’, ‘.co.id’ atau ‘.id’'
                });
            }
        }
    }

    render() {
        return (
            <Container>
                <Content style={styles.registerPage}>
                    <View style={styles.content}>
                        <KeyboardAvoidingView style={styles.formSignIn} behavior="padding">
                            <Text style={styles.title}>Yeayy..selangkah lagi nih, info kita nama lengkap dan email kamu ya!</Text>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.titleBox}>Masukkan nama lengkapmu</Text>
                                <View style={styles.sectionStyle}>
                                    <TextInput
                                        style={styles.formInputRegister}
                                        placeholder="Nama kamu sesuai KTP"
                                        underlineColorAndroid="transparent"
                                        value={this.state.name}
                                        onChangeText={this.handleInputName}
                                    />
                                </View>
                                <Text style={{ fontSize: 12, color: '#f37a73', paddingLeft: 10, marginTop: 5 }}>{this.state.errorName}</Text>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.titleBox}>Masukkan email kantor kamu</Text>
                                <View style={styles.sectionStyle}>
                                    <TextInput
                                        style={styles.formInputRegister}
                                        placeholder="email@gmail.com"
                                        underlineColorAndroid="transparent"
                                        value={this.state.email}
                                        onChangeText={this.handleInputEmail}
                                    />
                                </View>
                                <Text style={{ fontSize: 12, color: '#f37a73', paddingLeft: 10, marginTop: 5 }}>{this.state.errorEmail}</Text>
                            </View>
                            <View style={styles.btnForm}>
                                <TouchableOpacity onPress={this.onRegister}>
                                    <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                        <Text style={styles.btnName}>Masuk</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (user) => {
        return dispatch({ type: 'SET_USER', input: user });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);