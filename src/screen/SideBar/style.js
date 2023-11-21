import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#278B33',
        width: '100%',
        height: screenHeight,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        padding: 10,
    },
    imgProfile: {
        height: 100,
        width: 100,
    },
    sideBar: {
        textAlign: 'left',
    },
    headSideBar: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        alignContent: 'center',
    },
    profile: {
        marginBottom: 20,
    },
    nameTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    nameEmail: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
    },
    menuList: {
        fontSize: 20,
        color: '#ffffff'
    },

});

export default styles;