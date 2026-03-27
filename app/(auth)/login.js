import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (email && senha) {
      router.replace("/(tabs)");
    }
  }

  return (
    <View style={styles.container}>
      
      {/* LOGO / TITULO */}
      <Text style={styles.logo}>FIAP ELEVATOR</Text>
      <Text style={styles.subtitle}>Login no sistema 🤠</Text>

      {/* INPUT EMAIL */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        onChangeText={setEmail}
      />

      {/* INPUT SENHA */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        onChangeText={setSenha}
      />

      {/* BOTÃO */}
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      {/* TEXTO EXTRA */}
      <Text style={styles.footer}>Esqueceu sua senha?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 25,
  },

  logo: {
    color: "#E83D84",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E83D84",
  },

  botao: {
    backgroundColor: "#E83D84",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});

