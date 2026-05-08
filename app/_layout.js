import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
console.log("AUTH CONTEXT CARREGOU");

export default function RootLayout() {

  return (

    <AuthProvider>

      <Stack screenOptions={{ headerShown: false }}>

        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />

      </Stack>

    </AuthProvider>

  );
}