import styles from "./productoCrearForm.style";
import {ActivityIndicator, View} from "react-native";
import TextInput from "../../common/textInput/TextInput";
import Button from "../../common/button/Button";
import {useState} from "react";
import axios from "axios";
import {URL} from "../../../config/config";
import {router} from "expo-router";

const ProductoCrearForm = () => {
    const [canEdit, setCanEdit] = useState(true);
    const [loading, setLoading] = useState(false);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cantidad, setCantidad] = useState("");

    const handleCreate = () => {
        setCanEdit(false);
        setLoading(true);
        axios.post(`${URL}/api/Producto`, {nombre, descripcion, cantidad})
            .then(() => {
                router.back();
            }).catch((e) => {
            alert(e);
        }).finally(() => {
            setLoading(false);
            setCanEdit(true);
        })
    }

    return (
        <>
            <TextInput label={"Nombre"} disabled={!canEdit} onChangeText={(n) => setNombre(n)}/>
            <TextInput label={"Description"} disabled={!canEdit} onChangeText={(d) => setDescripcion(d)}/>
            <TextInput label={"Cantidad"} disabled={!canEdit} onChangeText={(c) => setCantidad(c)}/>
            <View style={styles.btnContainer}>
                {loading ? (
                    <ActivityIndicator size={"large"}/>
                ) : (
                    <Button onPress={handleCreate} color={"#000"} title={"Crear"} light/>
                )}
            </View>
        </>
    )
}

export default ProductoCrearForm;
