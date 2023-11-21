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
        marginRight: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    listBenefitLeft: {
        flex: 0.4,
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
    },
    listBenefitRight: {
        flex: 0.6,
        paddingLeft: 10,
        marginTop: 10,
    },
    listItemImg: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1
    },
    titleCard: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    priceCard: {
        fontSize: 14,
        color: '#159146',
        marginBottom: 15,
    },
    periodeCard: {
        color: '#6d7278',
        fontSize: 14,
    },
    titleCardImg: {
        zIndex: 2,
        position: 'absolute',
        bottom: 10,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    recomendedTitle: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    titlePackage: {
        color: '#000000',
        fontSize: 16,
        flex: 0.5,
        textAlign: 'left',
    },
    allList: {
        color: '#159146',
        fontSize: 12,
        flex: 0.5,
        textAlign: 'right',
        marginTop: 3,
    },
});

export default styles;