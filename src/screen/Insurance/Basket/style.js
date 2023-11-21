import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    InsurancePage: {
        backgroundColor: '#f4f7f9',
        padding: 20,
    },
    profileStatus: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 0,
        marginBottom: 20,
        margin: 0,
        shadowColor: "#71ae3b",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardDetail: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    leftCard: {
        flex: 0.2,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    rightCard: {
        flex: 0.7,
        paddingLeft: 10,
        marginTop: 10,
    },
    detailIcon: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10,
    },
    subtitleCard: {
        color: '#6d7278',
        fontSize: 14,
    },
    priceGreen: {
        fontSize: 14,
        color: '#159146',
        marginBottom: 10,
    },
    imageCard: {
        width: '100%',
        height: 60,
        resizeMode: 'contain',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1
    },
    detail: {
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 0,
        marginBottom: 20,
        margin: 0,
        shadowColor: "#71ae3b",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailList: {
        borderBottomWidth: 0.5,
        borderColor: '#dadada',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    totalList: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    leftContent: {
        flex: 0.5,  
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'center',
    },
    detailPayment: {
        flex: 0.7,  
        paddingLeft: 15,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    detailPrice: {
        paddingRight: 15,
        paddingVertical: 10,
        flex: 0.3,
    },
    total: {
        color: '#159146',
    },
    textTitle: {
        fontWeight: 'bold',
        color: '#36454f',
    },
    textPrice: {
        fontWeight: 'bold',
        color: '#36454f',
    },
    rightContent: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flex: 0.5,
    },
    boxList: {
        padding: 30,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    InsurancePakacge: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    InsuranceType: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
    },
    buttonSpace: {
        flex: 1,
    },
    buttonType: {
        borderWidth: 0.5,
        borderColor: '#cdcdcd',
        backgroundColor: '#dadada',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center'

    },
    textType: {
        color: '#6d7278',
        textAlign: 'center'
    },
    btnForm: {
        alignItems: 'center',
        marginTop: 30,
    },
    btnSignIn: {
        width: '100%',
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
    },
    emptyBasket: {
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imgEmptyBasket: {
        width: 135,
        height: 126,
        marginBottom: 30,
    },
    emptyBasketTitle: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        maxWidth: 300,
    },
    subEmptyBasketTitle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        maxWidth: 282
    },
    buttonType: {
        borderWidth: 0.4,
        borderColor: '#cdcdcd',
        backgroundColor: '#dadada',
        paddingRight: 10,
        width: '100%',
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    textType: {
        color: '#6d7278',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default styles;