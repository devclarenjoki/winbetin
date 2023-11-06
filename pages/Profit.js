import React from "react";
import DropdownComponent from "./DropdownComponent";
import { Text } from "react-native-paper";
import { View } from "react-native";

export default function Details() {
  const handleFruitSelect = (selectedFruit) => {
    console.log("Selected fruit: ", selectedFruit);
  };

  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Select Amount</Text>
        <DropdownComponent
          initialItems={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Pear", value: "pear" },
          ]}
          onItemSelect={handleFruitSelect}
          placeholderText={"Choose a fruit."}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Times Per Round</Text>
        <DropdownComponent
          initialItems={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Pear", value: "pear" },
          ]}
          onItemSelect={handleFruitSelect}
          placeholderText={"Choose a fruit."}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Amount per round</Text>
        <DropdownComponent
          initialItems={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Pear", value: "pear" },
          ]}
          onItemSelect={handleFruitSelect}
          placeholderText={"Choose a fruit."}
        />
      </View>
    </>
  );
}
