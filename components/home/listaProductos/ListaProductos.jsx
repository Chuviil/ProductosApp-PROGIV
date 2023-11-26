import ProductoCard from "../productoCard/ProductoCard";
import {View} from "react-native";
import styles from "./listaProductos.style";
import {router} from "expo-router";

const ListaProductos = ({data}) => {
    return (
        <View style={styles.cardsContainer}>
            {data?.map((producto) => (
                <ProductoCard
                    key={producto.idProducto}
                    producto={producto}
                    handleNavigate={() => router.push(`/producto/${producto.idProducto}`)}
                />
            ))}
        </View>
    )
}

export default ListaProductos;
