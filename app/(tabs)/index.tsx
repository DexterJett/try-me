import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello StickerSmash!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline",
  },
});
