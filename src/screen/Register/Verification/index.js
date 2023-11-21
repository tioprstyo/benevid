import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { connect } from 'react-redux';
import styles from './style';

class VerificationNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignin: false,
            phoneNumber: '',
            error: '',
        };
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <View style={styles.boxForm}>
                        <View style={styles.borderSwipe}></View>
                        <View>
                            <Text style={styles.title}>Verifikasi Nomor Ponsel</Text>
                            <Text style={styles.subtitle}>4 digit kode OTP telah dikirimkan ke nomor:</Text>
                            <Text style={styles.subtitle}>{this.props.users.phoneNumber}</Text>
                            <View style={styles.otpForm}>
                                <OTPInputView
                                    style={{width: '100%', height: 200}}
                                    pinCount={4}
                                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                    // onCodeChanged = {code => { this.setState({code})}}
                                    autoFocusOnLoad
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                    onCodeFilled = {(code => {
                                        this.props.navigation.navigate('RegisterForm')
                                    })}
                                />
                            </View>
                            <View style={styles.resendText}>
                                <Text style={styles.resend} numberOfLines={1}>Belum menerima kode OTP?</Text>
                                <Text style={styles.linkResend}>
                                    Kirim Ulang
                                </Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}
export default connect(mapStateToProps)(VerificationNumber);
