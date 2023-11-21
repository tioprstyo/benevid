import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    salaryPage: {
        backgroundColor: '#ECF5E6',
        padding: 20,
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#159146',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftContent: {
        flex: 0.9,  
    },
    textTitle: {
        fontSize: 12,
        color: '#000000',
    },
    textSubTitle: {
        fontSize: 16,
        color: '#159146',
    },
    imgFile: {
        marginRight: 20,
        width: 44,
        height: 47
    },
    rightContent: {
        flex: 0.1,
        right: 0
    },
});

export default styles;