import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function Button({
  texto,
  onPress,
  disabled,
}) {

  return (
    <TouchableOpacity
      style={[
        styles.botao,
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >

      <Text style={styles.texto}>
        {texto}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  botao: {
    backgroundColor: "#E83D84",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  disabled: {
    opacity: 0.5,
  },

  texto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});