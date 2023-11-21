import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import styles from './style';
import { connect } from 'react-redux';


class ImagePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            about: [
                'Syarat & Ketentuan', 'Terms of Use', 'Privacy Policy'
            ]
        };
    }

    backButton= () => {
        this.props.navigation.navigate('EditProfile');
    } 

    saveImage = () => {
        let data = this.props.users;
        data.imageProfile = this.props.navigation.state.params.image.uri;
        this.props.onTodoClick(data);
        this.props.navigation.push('EditProfile');
    }
    
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: this.props.navigation.state.params.image.uri }}
                        />
                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity style={styles.buttonLeft} onPress={() => this.backButton()}>
                            <Image
                                style={styles.imageButton}
                                source={require('./../../../../assets/icon/reset_button.png')}
                            />
                            <Text style={styles.textButton}>Ulangi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRight} onPress={() => this.saveImage()}>
                            <Image
                                style={styles.imageButton}
                                source={require('./../../../../assets/icon/checkList.png')}
                            />
                            <Text style={styles.textButton}>Gunakan</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ImagePreview);