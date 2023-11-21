import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    registerPage: {
        backgroundColor: '#ECF5E6',
    },
    content: {
        paddingHorizontal: 40,
        paddingVertical: 50
    },
    title: {
        color: '#159146',
        fontSize: 28,
        marginBottom: 50,
        fontWeight: '800'
    },
    sectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#159146',
        height: 50,
        paddingLeft: 20,
        borderRadius: 40,
    },
    formInputRegister: {
        textAlign: 'left'
    },
    titleBox: {
        color: '#36454f',
        fontSize: 14,
        marginBottom: 10,
        paddingLeft: 20
    },
    btnForm: {
        alignItems: 'center',
        marginTop: 30,
    },
    btnSignIn: {
        width: 230,
        backgroundColor: '#71ae3b',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    btnName: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default styles;