import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height) - 300;

const styles = StyleSheet.create({
    sigInPage: {
        position: 'relative',
    },
    tinyLogo: {
        width: '100%',
        height: 300,
        zIndex: 0,
    },
    formSignIn: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: '#ffff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        zIndex: 2,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 24,
        color: '#052913',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 12,
        color: '#36454f',
    },
    link: {
        fontSize: 12,
        color: '#309ff2',
    },
    titleForm: {
        fontSize: 12,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        color: '#36454f',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#b3b3b3',
        height: 50,
        borderRadius: 40,
    },
    imgBorder: {
        width: 50,
        height: 55,
        top: -40,
        left: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 15,
    },
    logoForm: {
        width: 35,
        height: 35,
    },
    numbCode: {
        padding: 5,
        margin: 5,
        alignItems: 'center',
        color: '#6d7278',
    },
    formInputSignIn: {
        flex: 1,
        paddingLeft: 10,
        borderLeftWidth: 0.5,
        borderLeftColor: '#b3b3b3'
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
