import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        FIAP ELEVATOR
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ff0055",
  },

  text: {
    color: "#ff0055",
    fontSize: 24,
    fontWeight: "bold",
  },
});