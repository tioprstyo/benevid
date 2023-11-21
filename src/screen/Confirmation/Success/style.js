import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    closeButton: {
        flex: 1,
        width: 16,
        height: 16
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    image: {
        width: 142,
        height: 142,
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center'
    },
    profileStatus: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
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
        marginRight: 10,
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
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10,
    },
    subtitleCard: {
        color: '#6d7278',
        fontSize: 12,
    },
    priceGreen: {
        fontSize: 12,
        color: '#159146',
        marginBottom: 10,
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
        minWidth: 102,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textBasketButton: {
        color: '#159146',
        textAlign: 'center'
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