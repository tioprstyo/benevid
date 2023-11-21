import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    MyInsurance: {
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
        marginBottom: 40,
        shadowColor: "#9FC87C",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    leftContent: {
        flex: 0.5,  
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        color: '#36454f',
    },
    textPrice: {
        fontWeight: 'bold',
        color: '#36454f',
        fontSize: 12,
    },
    rightContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 0.5,
    },
    topic: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    cardMyInsurance: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 20,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listMyInsuranceLeft: {
        flex: 0.2,
        position: 'relative',
        marginRight: 10,
    },
    listMyInsuranceRight: {
        flex: 0.8,
        paddingLeft: 10,
        marginTop: 10,
    },
    titleCard: {
        color: '#6d7278',
        fontSize: 14,
    },
    priceCard: {
        fontSize: 14,
        color: '#159146',
        marginBottom: 15,
    },
    insuranceName: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    textBasketButton: {
        color: '#159146',
        textAlign: 'center'
    },
    buttonBasket: {
        borderColor: '#159146',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        flex: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    buttonDetail: {
        borderColor: '#ffffff',
        backgroundColor: '#159146',
        borderWidth: 1,
        flex: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    listItemImg: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1
    },
    textDetailButton: {
        color: '#ffffff',
        textAlign: 'center'
    },
    emptyBasket: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imgEmptyBasket: {
        width: 135,
        height: 126,
        marginBottom: 30
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
    }
});

export default styles;