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
        justifyContent: 'center',
        alignContent: 'center',
    },
    imgProfile: {
        height: 134,
        width: 134,
        borderRadius: 70,
        zIndex: 1,
    },
    iconSpace: {
        zIndex: 2,
        marginLeft: -40,
        marginTop: 90,
    },
    editIcon: {
        width: 40,
        height: 40,
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
    },
    textValue: {
        fontWeight: 'bold',
        color: '#36454f',
        fontSize: 14,
    },
    changaProfile: {
        fontSize: 14,
        flex: 1,
        color: '#159146',
        justifyContent: 'flex-end',
        textAlign: 'right',
        marginTop: 10,
    },
    textSubTitle: {
        fontSize: 12,
        color: '#36454f',
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
    sectionStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#b3b3b3',
        height: 50,
        paddingLeft: 20,
        borderRadius: 40,
    },
    formInputName: {
        textAlign: 'left'
    },
    titleBox: {
        color: '#6b6c6f',
        fontSize: 12,
        marginBottom: 10,
        paddingLeft: 10
    },
    btnForm: {
        alignItems: 'center',
        marginTop: 30,
        height: 10
    },
    btnSignIn: {
        width: 193,
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
    numbCode: {
        padding: 5,
        margin: 5,
        alignItems: 'center',
        color: '#6d7278',
    },
    formInputSignIn: {
        flex: 1,
        paddingLeft: 10,
        borderLeftWidth: 0.5,
        borderLeftColor: '#b3b3b3'
    },
    formNumber: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#b3b3b3',
        height: 50,
        borderRadius: 40,
    },
});

export default styles;