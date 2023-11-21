import { StyleSheet, Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    InsurancePage: {
        backgroundColor: '#ECF5E6',
        padding: 20,
        position: 'relative'
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
    boxList: {
        padding: 20,
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
        borderWidth: 0.4,
        borderColor: '#cdcdcd',
        backgroundColor: '#dadada',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center'

    },
    buttonTypeActive: {
        borderWidth: 0.4,
        borderColor: '#159146',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center'

    },
    textTypeActive: {
        color: '#159146',
        textAlign: 'center'
    },
    textType: {
        color: '#6d7278',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        // margin: 0,
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
    buttonFilter: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        width: '60%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#159146',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 40,
        shadowColor: "#159146",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textFilter: {
        fontSize: 16,
        flex: 1,
        color: '#159146',
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: -30,
        fontWeight: '900',
    },
    btnForm: {
        alignItems: 'center',
        height: 10,
    },
    btnSignIn: {
        width: (width-60),
        backgroundColor: '#71ae3b',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    btnName: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    filterStatus: {
        backgroundColor: '#159146',
        borderRadius: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        marginRight: 10,
        marginBottom: 30,
    },
    textFilterStatus: {
        color: '#ffffff',
        fontSize: 12,
    },
    closeStatus: {
        marginLeft: 12,
        color: '#ffffff',
        fontSize: 12,
    }
});

export default styles;