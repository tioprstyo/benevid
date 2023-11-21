import { Row } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#159146',
    },
    boxForm: {
        backgroundColor: '#ffffff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        height: screenHeight,
        padding: 20
    },
    borderSwipe: {
        borderBottomColor: '#a7a7a7',
        borderBottomWidth: 3,
        width: '20%',
        alignSelf: 'center',
        marginBottom: 20
    },
    title: {
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        color: '#36454f',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10
    },
    resendText: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resend: {
        color: '#36454f',
        fontSize: 12,
        marginRight: 5,
    },
    linkResend: {
        color: '#0c8ade',
        fontSize: 12,
    },
    otpForm: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 50
    },
    borderStyleBase: {
        width: 50,
        height: 45
    },
    borderStyleHighLighted: {
        borderColor: '#979797',
    },
    underlineStyleBase: {
        width: 50,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        color: '#36454f'
    },
    underlineStyleHighLighted: {
        borderColor: '#159146',
    },
});

export default styles;