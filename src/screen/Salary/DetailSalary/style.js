import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
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
        padding: 20,
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pdf: {
        flex: 1,
        height: screenHeight,
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
    btnForm: {
        alignItems: 'center',
        marginTop: 20,
    },
    btnUnduh: {
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