import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [logado, setLogado] = useState(false);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!logado ? (
        <Stack.Screen name="(auth)/login" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}