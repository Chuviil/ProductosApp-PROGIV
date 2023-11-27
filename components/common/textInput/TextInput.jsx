import {Text, TextInput, View} from "react-native";
import styles from "./textInput.style";

const CustomTextInput = ({label, onChangeText, disabled, value}) => {
    return (
        <View style={styles.formContainer}>
            <Text>{label}</Text>
            <TextInput value={value} style={styles.inputContainer} onChangeText={onChangeText} editable={!disabled}/>
        </View>
    )
}

export default CustomTextInput;
