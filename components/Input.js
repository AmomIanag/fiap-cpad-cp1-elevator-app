import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";

export default function Input({
  erro,
  ...props
}) {

  return (
    <View style={styles.container}>

      <TextInput
        placeholderTextColor="#888"
        style={[
          styles.input,
          erro && styles.inputErro
        ]}
        {...props}
      />

      {erro && (
        <Text style={styles.erro}>
          {erro}
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",
  },

  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#E83D84",
  },

  inputErro: {
    borderColor: "red",
  },

  erro: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 13,
  },

});