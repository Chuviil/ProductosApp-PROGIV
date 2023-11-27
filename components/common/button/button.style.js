import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: (color) => ({
        backgroundColor: color,
        paddingVertical: 10,
        paddingHorizontal: 24,
        margin: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '100%',
    })
});

export default styles;
