import {ActivityIndicator, Image, Text, View} from "react-native";
import styles from "./productoDisplay.style";
import TextInput from "../../common/textInput/TextInput";
import Button from "../../common/button/Button";
import {useState} from "react";
import axios from "axios";
import {URL} from "../../../config/config";
import {router} from "expo-router";
import {images} from "../../../constants";

const ProductoDisplay = ({producto}) => {
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nombre, setNombre] = useState(producto?.nombre);
    const [descripcion, setDescripcion] = useState(producto?.descripcion);
    const [cantidad, setCantidad] = useState(producto?.cantidad + "");

    const handleDelete = () => {
        setLoading(true);
        axios.delete(`${URL}/api/Producto/${producto.idProducto}`)
            .then(() => {
                router.back();
            }).catch((e) => {
            alert(e);
        }).finally(() => {
            setLoading(false);
        })
    }

    const handleEdit = () => {
        setCanEdit(false);
        setLoading(true);
        axios.put(`${URL}/api/Producto/${producto.idProducto}`, {nombre, descripcion, cantidad})
            .then(() => {
                producto.nombre = nombre;
                alert("Producto actualizado correctamente");
            }).catch((e) => {
            alert(e);
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{producto?.nombre}</Text>
            <Image
                source={images.mono}
                resizeMode={'contain'}
                style={styles.imgProducto}
            />
            <TextInput label={"Nombre"} value={nombre} onChangeText={(n) => setNombre(n)} disabled={!canEdit}/>
            <TextInput label={"Descripcion"} value={descripcion}
                       onChangeText={(d) => setDescripcion(d)} disabled={!canEdit}/>
            <TextInput label={"Cantidad"} value={cantidad} onChangeText={(c) => setCantidad(c)} disabled={!canEdit}/>
            <View style={styles.btnContainer}>
                {loading ? (
                    <ActivityIndicator size={"large"}/>
                ) : canEdit ? (
                    <>
                        <Button color={"#000101"} title={"Guardar"} onPress={handleEdit} light/>
                        <Button color={"#EE152A"} title={"Cancelar"} onPress={() => setCanEdit(false)} light/>
                    </>
                ) : (
                    <>
                        <Button color={"#FDB922"} title={"Editar"} onPress={() => setCanEdit(true)}/>
                        <Button color={"#EE152A"} title={"Eliminar"} onPress={handleDelete} light/>
                    </>
                )}
            </View>
        </View>
    )
}

export default ProductoDisplay;
