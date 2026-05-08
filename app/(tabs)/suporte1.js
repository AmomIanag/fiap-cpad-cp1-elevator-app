import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Suporte() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔧 Suporte</Text>

      <Text style={styles.descricao}>
        Qualquer problema nos contate:
      </Text>

      <Text style={styles.email}>
        suporte.fiap@gmail.com
      </Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212', // fundo preto
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ff0055', // vermelho FIAP
  },
  descricao: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    fontWeight: '600',
  },
  botao: {
    backgroundColor: '#ff0055',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});