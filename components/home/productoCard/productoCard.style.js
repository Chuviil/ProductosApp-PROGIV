import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    imgContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    imgProducto: {
        width: "70%",
        height: "70%",
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    productoName: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
    },
    productoDescription: {
        fontSize: SIZES.small + 2,
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
    },
});

export default styles;
