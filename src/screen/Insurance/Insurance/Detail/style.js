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
        marginBottom: 30,
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
        flex: 1,
        paddingLeft: 10,
        marginTop: 10,
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
        marginBottom: 30,
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
    leftContent: {
        flex: 1,  
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    detailPayment: {
        flex: 1,  
        paddingLeft: 15,
        paddingVertical: 10,
        justifyContent: 'center',
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
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    btnNameLeft: {
        fontSize: 18,
        flex: 0.5,
        color: '#ffffff',
        textAlign: 'center',
        borderRightWidth: 2,
        borderRightColor: '#71ae3b',
        paddingVertical: 5,
    },
    btnNameRight: {
        fontSize: 18,
        flex: 0.5,
        color: '#ffffff',
        textAlign: 'center',
        paddingVertical: 5,
    },
    titleBox: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left"
    },
    textModalBasket: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
        paddingVertical: 5,
    },
    textModalList: {
        fontSize: 14,
        color: '#159146',
        textAlign: 'center',
        paddingVertical: 5,
    },
    btnModalBasket: {
        width: '48%',
        justifyContent: 'space-around',
        backgroundColor: '#159146',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnModalList: {
        width: '48%',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        borderColor: '#159146',
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default styles;