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
        flex: 0.4,
        position: 'relative',
        alignItems: 'center',
        justifyContent:'center'
    },
    listBenefitRight: {
        flex: 0.5,
        paddingLeft: 10,
        marginTop: 10,
    },
    listItemImg: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1
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
    periodeCard: {
        fontSize: 14,
        color: '#36454f',
        fontWeight: 'bold'
    },
    detailIcon: {
        flex: 0.1,
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
    }
});

export default styles;