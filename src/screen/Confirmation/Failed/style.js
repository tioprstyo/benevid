import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const screenWidth = Math.round(screen.width);  
const screenHeight = Math.round(screen.height);

const styles = StyleSheet.create({
    closeButton: {
        flex: 1,
        width: 16,
        height: 16
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    image: {
        width: 142,
        height: 142,
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center'
    },
});

export default styles;