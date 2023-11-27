import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./productoCard.style";

const ProductoCard = ({producto, handleNavigate}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.imgContainer}>
                <Image
                    source={{uri: "https://picsum.photos/200"}}
                    resizeMode={'contain'}
                    style={styles.imgProducto}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.productoName} numberOfLines={1}>
                    {producto?.nombre}
                </Text>

                <Text style={styles.productoDescription}>
                    {producto?.descripcion}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductoCard;
