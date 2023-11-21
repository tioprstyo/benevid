import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    benefitPage: {
        backgroundColor: '#ECF5E6',
        padding: 20,
    },
    profileStatus: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 20,
    },
    leftContent: {
        flex: 0.6,  
        paddingLeft: 15,
        paddingVertical: 15,
    },
    textTitle: {
        fontWeight: 'bold',
        color: '#36454f',
    },
    textSubTitle: {
        fontSize: 12,
        color: '#36454f',
    },
    imgPoints: {
        marginRight: 5,
    },
    rightContent: {
        paddingRight: 15,
        paddingVertical: 15,
        flex: 0.4,
        flexDirection: 'row',
        marginTop: 10,
    },
});

export default styles;