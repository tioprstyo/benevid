import { StyleSheet, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');
var radiusHeight = (1.2 * (80*width/100)) / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: '10%'
    },
    idTypeTitle: {
        color: '#6b6c6f',
        fontSize: 12,
        fontWeight: '600'
    },
    sectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#b3b3b3',
        height: 50,
        paddingLeft: 20,
        borderRadius: 40,
    },
    formInputId: {
        textAlign: 'left'
    },
    titleBox: {
        color: '#6b6c6f',
        fontWeight: '600',
        fontSize: 12,
        marginBottom: 10,
        paddingLeft: 10
    },
    idCardImg: {
        width: '100%',
        height: radiusHeight,
        borderRadius: 30,
    },
    btnForm: {
        flex: 1,
        alignSelf: 'center',
    },
    btnIdCard: {
        width: 230,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    btnName: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    textError: {
        fontSize: 12,
        color: '#f37a73',
        paddingLeft: 10,
        marginTop: 5
    },
    editIcon: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginTop: -25
    },
});

export default styles;