import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("screen");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    profileStatus: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listBenefitLeft: {
        width: 60,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    listBenefitRight: {
        flex: 0.6,
        paddingLeft: 5,
        paddingRight: 10,
        marginTop: 10,
    },
    listItemImg: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1
    },
    insuranceName: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleCard: {
        color: '#6d7278',
        fontSize: 13,
        marginBottom: 5,
    },
    priceCard: {
        fontSize: 13,
        color: '#159146',
        marginBottom: 5,
    },
    periodeCard: {
        fontSize: 14,
        color: '#36454f',
        fontWeight: 'bold'
    },
    detailIcon: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCardImg: {
        zIndex: 2,
        position: 'absolute',
        bottom: 10,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonBasket: {
        borderColor: '#159146',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textBasketButton: {
        color: '#159146',
        textAlign: 'center',
        fontSize: 13
    },
    buttonDetail: {
        borderColor: '#ffffff',
        backgroundColor: '#159146',
        borderWidth: 1,
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textDetailButton: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 13
    }
});

export default styles;