import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    verificarSessao();
  }, []);

  async function verificarSessao() {
    const sessao = await AsyncStorage.getItem("sessao");

    if (sessao) {
      router.replace("/(tabs)");
    } else {
      router.replace("/login");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <ActivityIndicator size="large" color="#E83D84" />
    </View>
  );
}