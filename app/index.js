import {SafeAreaView, View} from "react-native";
import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import ListaProductos from "../components/home/listaProductos/ListaProductos";

export default function Page() {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: "Productos",
                    headerTitleAlign: "center",
                }}
            />
            <StatusBar style={"auto"}/>
            <View>
                <ListaProductos/>
            </View>
        </SafeAreaView>
    );
}
