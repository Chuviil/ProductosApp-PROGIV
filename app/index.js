import {ActivityIndicator, SafeAreaView, ScrollView, View} from "react-native";
import {Stack, useFocusEffect} from "expo-router";
import {StatusBar} from "expo-status-bar";
import ListaProductos from "../components/home/listaProductos/ListaProductos";
import useFetch from "../hooks/useFetch";
import {useCallback} from "react";
import {SIZES} from "../constants";

export default function Page() {
    const {data, loading, error, refetch} = useFetch("Producto");

    useFocusEffect(
        useCallback(() => {
            refetch();
        }, [])
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: "Productos",
                    headerTitleAlign: "center",
                }}
            />
            <StatusBar style={"auto"}/>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                        <ListaProductos data={data}/>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
