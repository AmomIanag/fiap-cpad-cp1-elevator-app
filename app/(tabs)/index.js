import * as ImagePicker from "expo-image-picker"; //imagem upload
import { Image } from "react-native";
import CardAula from "../../components/CardAula";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

export default function Perfil() {
  const router = useRouter();

  const { usuario, logout } = useAuth();

  const [foto, setFoto] = useState(usuario?.foto || null);
  
  if (!usuario) {
  return null;
}

async function escolherFoto() {

  const permissao =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permissao.granted) {
    return;
  }

  const resultado =
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

  if (!resultado.canceled) {

    const uri = resultado.assets[0].uri;

    setFoto(uri);

    const usuarioAtualizado = {
      ...usuario,
      foto: uri,
    };

    await AsyncStorage.setItem(
      "usuario",
      JSON.stringify(usuarioAtualizado)
    );
  }
}  

async function handleLogout() {
    await logout();

    router.replace("/login");
  }

  if (!usuario) {
    return null;
  }

  return (
    <View style={styles.container}>

      <Header />



      {/* BOTÃO LOGOUT */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>

      {/* PERFIL */}
      <View style={styles.profileContainer}>

        <TouchableOpacity
  style={styles.fotoPlaceholder}
  onPress={escolherFoto}
>

  {foto ? (

    <Image
      source={{ uri: foto }}
      style={styles.foto}
    />

  ) : (

    <Text style={styles.fotoText}>
      {usuario.nome.charAt(0).toUpperCase()}
    </Text>

  )}

</TouchableOpacity>

        <Text style={styles.nome}>
          {usuario.nome}
        </Text>

        <Text style={styles.rm}>
          RM{usuario.rm}
        </Text>

        <Text style={styles.turma}>
          Turma: {usuario.turma}
        </Text>
      </View>

      <CardAula />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    height: 80,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ff0055",
  },

  headerText: {
    color: "#ff0055",
    fontSize: 24,
    fontWeight: "bold",
  },

  logoutButton: {
    position: "absolute",
    top: 95,
    right: 20,
    zIndex: 10,
  },

  logout: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  profileContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  fotoPlaceholder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ff0055",
    marginBottom: 12,
  },

  foto: {
  width: 106,
  height: 106,
  borderRadius: 53,
},

  fotoText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },

  nome: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  rm: {
    color: "#aaa",
    fontSize: 15,
    marginTop: 4,
  },

  turma: {
    color: "#ff0055",
    fontSize: 15,
    marginTop: 4,
    fontWeight: "600",
  },

  cardAula: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#2a2a2a",
    alignSelf: "center",
    width: "90%",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  cardTitulo: {
    color: "#ff0055",
    fontSize: 16,
    fontWeight: "bold",
  },

  hora: {
    color: "#aaa",
    fontSize: 12,
  },

  cardConteudo: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  andar: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
});