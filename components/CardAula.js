import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function CardAula() {
  return (
    <View style={styles.cardAula}>

      <View style={styles.cardHeader}>

        <Text style={styles.cardTitulo}>
          Próxima Aula
        </Text>

        <Text style={styles.hora}>
          08:10
        </Text>

      </View>

      <Text style={styles.cardConteudo}>
        Cross-Platform Application Development
      </Text>

      <Text style={styles.andar}>
        5º andar - Sala 502
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
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