import { StyleSheet, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');
var widthRadius = width - ((3 * width) / 100);

console.log(widthRadius);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: '3%'
    },
    image: {
        width: '100%',
        height: widthRadius,
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: '15%',
        alignSelf: 'center',
        bottom: 30,
    },
    buttonLeft: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    buttonRight: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    imageButton: {
        width: 48,
        height: 48,
        marginBottom: 10,
    },
    textButton: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default styles;