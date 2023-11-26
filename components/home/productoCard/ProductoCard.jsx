import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./productoCard.style";

const ProductoCard = ({producto, handleNavigate}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.imgContainer}>
                <Image
                    source={{uri: "https://th.bing.com/th/id/R.8c83787f4484fff0ca489133db52c63e?rik=ltTNJvZ6W9%2bHwg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-XQnQEoDhLbs%2fUummt-BpGxI%2fAAAAAAAAGS8%2f4FnUGNW7Az8%2fs1600%2f45673_152018_1.jpg&ehk=y9e799PbDwvgwZ%2b5bzXl84ZEWMKoapysY2gjUyVs2gU%3d&risl=&pid=ImgRaw&r=0"}}
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
