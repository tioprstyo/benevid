import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    myProfilePage: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8'
    },
    profileName: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 30,
    },
    imgProfile: {
        height: 94,
        width: 94,
        borderRadius: 50
    },
    namEmail: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleName: {
        fontSize: 26,
        color: '#000000',
        fontWeight: 'bold',
    },
    titleEmail: {
        fontSize: 16,
        color: '#000000',
    },
    iconSpace: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    editIcon: {
        width: 21,
        height: 21,
    },
    profileStatus: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.2,
        marginHorizontal: 3,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 35,
        shadowColor: "#312b8e8e",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.85,
        elevation: 5,
    },
    leftContent: {
        flex: 0.6,  
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    aboutList: {
        borderWidth: 0.2,
        marginHorizontal: 3,
        borderColor: '#ECF5E6',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 35,
        shadowColor: "#312b8e8e",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.85,
        elevation: 5,
    },
    listAbout: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
        marginHorizontal: 20,
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'row',
    },
    textTitleAbout: {
        flex: 1,
        fontWeight: 'bold',
        color: '#36454f',
        fontSize: 14,
    },
    imgArrow: {
        width: 20,
        height: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textTitle: {
        fontWeight: 'bold',
        color: '#36454f',
        fontSize: 14,
    },
    textSubTitle: {
        fontSize: 12,
        color: '#36454f',
    },
    imgPoints: {
        marginRight: 5,
    },
    rightContent: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 0.4,
        flexDirection: 'row',
        marginTop: 10,
    },
    titleCardProfile: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginBottom: 10,
    },
    titleNameCard: {
        fontSize: 16,
        flex: 1,
        color: '#000000'
    },
    titleAction: {
        fontSize: 16,
        flex: 1,
        color: '#159146',
        justifyContent: 'flex-end',
        textAlign: 'right'
    },
    idCardLeft: {
        flex: 0.3,  
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    idCardImg: {
        height: 55,
        width: '100%',
    },
    idCardRight: {
        paddingVertical: 15,
        flex: 0.7,
        justifyContent: 'center',
        alignContent: 'center'
    },
    btnForm: {
        alignItems: 'center',
        marginBottom: 10,
    },
    btnSignIn: {
        width: '100%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#159146',
        alignItems: 'center',
    },
    btnName: {
        fontSize: 18,
        color: '#159146',
        fontWeight: 'bold',
    },
});

export default styles;