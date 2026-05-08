import { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

console.log("AUTH CONTEXT CARREGOU");

const AuthContext = createContext({});

export function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarSessao();
  }, []);

  async function carregarSessao() {
    const usuarioSalvo = await AsyncStorage.getItem("usuario");
    const sessao = await AsyncStorage.getItem("sessao");

    if (usuarioSalvo && sessao) {
      setUsuario(JSON.parse(usuarioSalvo));
    }

    setLoading(false);
  }

  async function login(email, senha) {

    const usuarioSalvo = await AsyncStorage.getItem("usuario");

    if (!usuarioSalvo) {
      return false;
    }

    const usuarioConvertido = JSON.parse(usuarioSalvo);

    if (
      email === usuarioConvertido.email &&
      senha === usuarioConvertido.senha
    ) {

      await AsyncStorage.setItem(
        "sessao",
        JSON.stringify({ logado: true })
      );

      setUsuario(usuarioConvertido);

      return true;
    }

    return false;
  }

  async function logout() {
    await AsyncStorage.removeItem("sessao");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}