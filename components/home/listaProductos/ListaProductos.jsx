import ProductoCard from "../productoCard/ProductoCard";
import { Text, View } from "react-native";
import styles from "./listaProductos.style";
import { router } from "expo-router";

const ListaProductos = ({ data }) => {
    return (
        data?.length <= 0 ? (
            <Text>No hay productos, prueba agregar uno con el boton de arriba.</Text>
        ) : (
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
    );
};

export default ListaProductos;
