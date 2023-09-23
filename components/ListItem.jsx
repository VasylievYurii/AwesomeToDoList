import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        deleteHandler(el.key);
      }}
    >
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 20,
    width: "100%",
  },
});
