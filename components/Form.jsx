import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (value) => {
    setText(value);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Enter text"
      />
      <Button
        color="orange"
        title="Add to do"
        onPress={() => {
          addHandler(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "orange",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "10%",
  },
});
