import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: false,
      phoneNumber: '',
      error: '',
    };
  }

  onSignin = () => {
    if (!this.state.phoneNumber) {
      this.setState({
        error: 'Nomor ponsel dibutuhkan'
      });
    } else {
      let data = this.props.users;
      data.phoneNumber = '+62' + (this.state.phoneNumber).toString();
      this.props.onTodoClick(data);
      this.props.navigation.navigate('VerificationNumber')
    }
  };

  handleInputChange = (numb) => {
    if (numb.length === 0) {
        this.setState({
          error: 'Nomor ponsel dibutuhkan',
          phoneNumber: ''
        });
    } else if (/^\d+$/.test(numb)) {
      this.setState({
        phoneNumber: numb,
        error: ''
      });
      
      if (this.state.phoneNumber.length < 9) {
        this.setState({
          error: 'Setidaknya masukan 9 digit nomor ponselmu',
        });
      }
    }
  }

  render() {
    return (
      <ScrollView>
          <View style={styles.signInPage}>
            <Image
              style={styles.tinyLogo}
              source={require('./../../assets/img/background_login_page.png')}
            />
            <KeyboardAvoidingView style={styles.formSignIn} behavior="padding">
              <View style={styles.imgBorder}>
                <Image
                  style={styles.logoForm}
                  source={require('./../../assets/img/logo_benevid.png')}
                  />
              </View>
              <View style={{ marginBottom: 30 }}>
                <Text style={styles.title}>Selamat Datang di Benevid!</Text>
                <Text style={styles.subTitle}>
                  Dengan melanjutkan, saya menerima Benefit’s <Text style={styles.link}>Terms of Use</Text>
                </Text>
              </View>
              <Text style={styles.titleForm}>Masukkan Nomor Ponselmu</Text>
              <View style={styles.sectionStyle}>
                <Text style={styles.numbCode}>+62 </Text>
                <TextInput
                  style={styles.formInputSignIn}
                  placeholder="87888412321"
                  underlineColorAndroid="transparent"
                  value={this.state.phoneNumber}
                  onChangeText={this.handleInputChange}
                />
              </View>
              <Text style={{ fontSize: 12, color: '#f37a73', paddingLeft: 10, marginTop: 5 }}>{this.state.error}</Text>
            <View style={styles.btnForm}>
              <TouchableOpacity onPress={this.onSignin}>
                <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                    <Text style={styles.btnName}>Lanjutin</Text>
                </LinearGradient>
              </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (user) => {
      dispatch({ type: 'SET_USER', input: user });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
