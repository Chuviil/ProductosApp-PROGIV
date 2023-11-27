import {StyleSheet} from "react-native";
import {SIZES} from "../../../constants";

const styles = StyleSheet.create({
    imgProducto: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnContainer: {
        alignItems: 'center',
        width: '80%'
    },
});

export default styles;
