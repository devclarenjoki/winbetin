import React from "react";
import DropdownComponent from "./DropdownComponent";
import { Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function Profit() {
  const handleFruitSelect = (selectedFruit) => {
    console.log("Selected fruit: ", selectedFruit);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Profit: </Text>
      <View style={styles.row}>
        <Text>Select Amount</Text>
        <DropdownComponent
          initialItems={[
            { label: "4999", value: "4999" },
            { label: "2499", value: "2499" },
            { label: "999", value: "999" },
            { label: "499", value: "499" },
          ]}
          onItemSelect={handleFruitSelect}
          style={{ elevation: 1 }}

          // placeholderText={initialItems[0]?.label}
        />
      </View>
      <View style={styles.row}>
        <Text>Times Per Round</Text>
        <DropdownComponent
          initialItems={[
            { label: "30", value: "30" },
            { label: "20", value: "20" },
            { label: "10", value: "10" },
          ]}
          onItemSelect={handleFruitSelect}
          // placeholderText={initialItems[0]?.label}
        />
      </View>
      <View style={styles.row}>
        <Text>Amount per round</Text>
        <DropdownComponent
          initialItems={[
            { label: "400", value: "400" },
            { label: "300", value: "300" },
            { label: "200", value: "200" },
            { label: "100", value: "100" },
          ]}
          onItemSelect={handleFruitSelect}
          style={{ elevation: 3 }}
          // placeholderText={initialItems[0]?.label}
        />
      </View>
      <Button
        mode="contained"
        // onPress={handleSubmit}
        // loading={isSubmitting}
        // disabled={isSubmitting}
        style={styles.button}
      >
        Spin
      </Button>
      <Button
        mode="contained"
        // onPress={handleSubmit}
        // loading={isSubmitting}
        // disabled={isSubmitting}
        style={styles.button}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  button: {
    width: "100%",
    marginBottom: 10
    // backgroundColor: 'white', // Change to the color you want for the button background
  },
});
