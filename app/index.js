import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, View} from "react-native";
import {router, Stack, useFocusEffect} from "expo-router";
import {StatusBar} from "expo-status-bar";
import ListaProductos from "../components/home/listaProductos/ListaProductos";
import useFetch from "../hooks/useFetch";
import {useCallback, useState} from "react";
import {SIZES} from "../constants";
import Button from "../components/common/button/Button";

export default function Page() {
    const {data, loading, error, refetch} = useFetch("Producto");
    const [refresing, setRefreshing] = useState(false);

    useFocusEffect(
        useCallback(() => {
            refetch();
        }, [])
    );

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: "Productos",
                    headerTitleAlign: "center",
                }}
            />
            <StatusBar style={"auto"}/>
            <ScrollView showsVerticalScrollIndicator={false}
                        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh}/>}>
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
                        <>
                            <View style={{width: 315}}>
                                <Button color={"#000"} light title={"Crear Producto"}
                                        onPress={() => router.push("/producto/create")}
                                />
                            </View>
                            <ListaProductos data={data}/>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
