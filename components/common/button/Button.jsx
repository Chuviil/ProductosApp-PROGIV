import {Text, TouchableOpacity} from "react-native";
import styles from "./button.style";

const Button = ({title, color, onPress, light}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button(color ?? 'lightblue')}>
            <Text style={{fontWeight: "bold", color: light ? "#fff" : "#000"}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;
