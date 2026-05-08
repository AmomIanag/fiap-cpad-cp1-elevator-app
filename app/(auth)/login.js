import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {

  const router = useRouter();



  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({});

  function validar() {

  let novosErros = {};

  if (!email) {
    novosErros.email = "Email é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    novosErros.email = "Email inválido";
  }

  if (!senha) {
    novosErros.senha = "Senha é obrigatória";
  }

  setErros(novosErros);

  return Object.keys(novosErros).length === 0;
}
  
  async function handleLogin() {

  if (!validar()) {
    return;
  }

  const sucesso = await login(email, senha);

  if (sucesso) {

    router.replace("/(tabs)");

  } else {

    setErros({
      senha: "Email ou senha incorretos"
    });

  }
}

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        FIAP ELEVATOR
      </Text>

      <Text style={styles.subtitle}>
        Login no sistema
      </Text>

      <Input
        placeholder="Email"
        onChangeText={setEmail}
        erro={erros.email}
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        erro={erros.senha}
      />

      <Button
        texto="Entrar"
        onPress={handleLogin}
        disabled={!email || !senha}
      />

      <TouchableOpacity
        onPress={() => router.push("/cadastro")}
      >

        <Text style={styles.footer}>
          Não possui conta? Cadastre-se
        </Text>

      </TouchableOpacity>

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

  footer: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },

});