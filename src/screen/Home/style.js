import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#278B33',
        minHeight: 223,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 20,
        marginBottom: 10,
    },
    headerNameTitleLeft: {
        fontSize: 28,
        flex: 0.5,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    headerNameTitleRight: {
        flex: 0.5,
        paddingLeft: 20,
        flexDirection: 'row',
        marginTop: 10,
    },
    textPoints: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'right'
    },
    imgPoints: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    TextDiv: {
        flex: 1,
        marginLeft: 20,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 14,
        width: '100%',
        color: '#ffffff',
    },
    headerTextnotSignIn: {
        fontSize: 14,
        width: '80%',
        color: '#ffffff', 
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 20,
    },
    formToken: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    formInputHome: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 0.6,
    },
    btnToken: {
        backgroundColor: '#e0fb23',
        borderRadius: 40,
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnName: {
        fontSize: 12,
        color: '#159146',
        position: 'absolute'
    },
    btnNameLogin: {
        color: '#159146',
    },
    btnLogin: {
        backgroundColor: '#e0fb23',
        borderRadius: 40,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    content: {
        padding: 15,
        marginTop: 10,
    },
    contentTitle: {
        fontSize: 22,
        color: '#36454f',
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 15,
        color: '#36454f',
    },
    contentDesc: {
        fontSize: 16,
        color: '#36454f',
    },
    contentImageHome: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        marginTop: 25,
        justifyContent: 'space-between',
    },
    contentImg: {
        flexBasis: '48%',
    },
    imgContent: {
        height: 256,
        width: '100%',
        zIndex: 1,
    },
    dots: {
        height: 25,
        width: 6,
    },
    sideBarButton: {
        marginRight: 5,
        top: -3,
        width: 20,
    },
    cardContent: {
        position: 'relative'
    },
    titleCard: {
        zIndex: 2,
        position: 'absolute',
        bottom: 45,
        left: 20,
        right: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subTitleCard: {
        zIndex: 2,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        color: '#ffffff',
        fontSize: 12,
    }
});

export default styles;