import {Image, SafeAreaView, View} from "react-native";
import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {images, SIZES} from "../../constants";
import ProductoCrearForm from "../../components/producto/productoCrearForm/ProductoCrearForm";

const Create = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: "Crear Producto",
                    headerTitleAlign: "center",
                }}
            />
            <StatusBar style={"auto"}/>
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.mono}
                    resizeMode={'contain'}
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 10,
                        marginVertical: 10,
                    }}
                />
                <ProductoCrearForm/>
            </View>
        </SafeAreaView>
    );
}

export default Create;
