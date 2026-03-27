import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>FIAP ELEVATOR</Text>
      </View>

      {/* Perfil */}
      <View style={styles.profileContainer}>
        <View style={styles.fotoPlaceholder}>
          <Text style={styles.fotoText}>A</Text>
        </View>
        <Text style={styles.nome}>amomzinho fernando victor</Text>
        <Text style={styles.rm}>RM123456</Text>
        <Text style={styles.turma}>Turma: 2CCPH</Text>
      </View>

      {/* Card Próxima Aula */}
      <View style={styles.cardAula}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitulo}>Próxima Aula</Text>
          <Text style={styles.hora}>08:10</Text>
        </View>
        <Text style={styles.cardConteudo}>
          Cross-Platform Application Development
        </Text>
        <Text style={styles.andar}>
          5º andar - Sala 502
        </Text>
      </View>
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
  fotoText: {
    fontSize: 40,
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