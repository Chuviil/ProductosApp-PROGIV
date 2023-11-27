import {ActivityIndicator, SafeAreaView, Text, View} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {SIZES} from "../../constants";
import useFetch from "../../hooks/useFetch";
import ProductoDisplay from "../../components/producto/productoDisplay/ProductoDisplay";

const Producto = () => {
    const {id} = useLocalSearchParams();
    const {data, loading, error} = useFetch(`Producto/${id}`);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: "Producto",
                    headerTitleAlign: "center",
                }}
            />
            <StatusBar style={"auto"}/>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}
            >
                {loading ? (
                    <ActivityIndicator size={"large"}/>
                ) : error ? (
                    <Text>Error: {error.message}</Text>
                ) : (
                    <ProductoDisplay producto={data}/>
                )}
            </View>
        </SafeAreaView>
    );
}

export default Producto;
