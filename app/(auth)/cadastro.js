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

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cadastro() {

  const router = useRouter();

  const [nome, setNome] = useState("");
  const [rm, setRm] = useState("");
  const [turma, setTurma] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erros, setErros] = useState({});

  function validar() {

    let novosErros = {};

    // NOME
    if (!nome.trim()) {
      novosErros.nome = "Nome é obrigatório";
    }

    // RM
    if (!rm.trim()) {
      novosErros.rm = "RM é obrigatório";
    }

    // TURMA
    if (!turma.trim()) {
      novosErros.turma = "Turma é obrigatória";
    }

    // EMAIL
    if (!email.trim()) {

      novosErros.email = "Email é obrigatório";

    } else if (!/\S+@\S+\.\S+/.test(email)) {

      novosErros.email = "Formato de email inválido";

    }

    // SENHA
    if (!senha) {

      novosErros.senha = "Senha é obrigatória";

    } else if (senha.length < 6) {

      novosErros.senha =
        "Senha deve ter no mínimo 6 caracteres";

    }

    // CONFIRMAR SENHA
    if (!confirmarSenha) {

      novosErros.confirmarSenha =
        "Confirme sua senha";

    } else if (senha !== confirmarSenha) {

      novosErros.confirmarSenha =
        "As senhas não coincidem";

    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  async function handleCadastro() {

    if (!validar()) {
      return;
    }

    const usuario = {
      nome,
      rm,
      turma,
      email,
      senha,
    };

    await AsyncStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );

    router.replace("/login");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        FIAP ELEVATOR
      </Text>

      <Text style={styles.subtitle}>
        Criar conta
      </Text>

      <Input
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        erro={erros.nome}
      />

      <Input
        placeholder="RM"
        value={rm}
        onChangeText={setRm}
        erro={erros.rm}
      />

      <Input
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
        erro={erros.turma}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        erro={erros.email}
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        erro={erros.senha}
      />

      <Input
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        erro={erros.confirmarSenha}
      />

      <Button
        texto="Cadastrar"
        onPress={handleCadastro}
        disabled={
          !nome ||
          !rm ||
          !turma ||
          !email ||
          !senha ||
          !confirmarSenha
        }
      />

      <TouchableOpacity
        onPress={() => router.push("/login")}
      >

        <Text style={styles.footer}>
          Já possui conta? Faça login
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
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 35,
  },

  footer: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },

});