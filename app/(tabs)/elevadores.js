import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Elevador() {
  const [andar, setAndar] = useState("");

  const handlePress = (num) => {
    if (andar.length < 3) {
      setAndar(andar + num);
    }
  };

  const limpar = () => setAndar("");

  const solicitar = () => {
    if (andar) {
      alert(`Elevador solicitado para o andar ${andar}. Tempo estimado: 30 segundos.`);
      setAndar("");
    }
  };

  const renderBotao = (num) => (
    <TouchableOpacity style={styles.botao} onPress={() => handlePress(num)}>
      <Text style={styles.botaoTexto}>{num}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Elevador</Text>

      <View style={styles.display}>
        <Text style={styles.displayTexto}>
          {andar || "--"}
        </Text>
        <Text style={styles.subTexto}>Selecione o andar</Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.linha}>
          {renderBotao("1")}
          {renderBotao("2")}
          {renderBotao("3")}
        </View>
        <View style={styles.linha}>
          {renderBotao("4")}
          {renderBotao("5")}
          {renderBotao("6")}
        </View>
        <View style={styles.linha}>
          {renderBotao("7")}
          {renderBotao("8")}
          {renderBotao("9")}
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoSecundario} onPress={limpar}>
            <Text style={styles.botaoTexto}>C</Text>
          </TouchableOpacity>

          {renderBotao("0")}

          <TouchableOpacity style={styles.botaoConfirmar} onPress={solicitar}>
            <Text style={styles.botaoTexto}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    color: "#ff0055",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  display: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  displayTexto: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  subTexto: {
    color: "#aaa",
    marginTop: 8,
  },
  teclado: {
    width: "100%",
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  botao: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#1f1f1f",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  botaoSecundario: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoConfirmar: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#ff0055",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});