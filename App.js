import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy milk", key: "1" },
    { text: "Buy bread", key: "2" },
    { text: "Buy tomato", key: "3" },
    { text: "Buy pizza", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text, key: Math.random().toString(36).substring(7) }, ...list];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
