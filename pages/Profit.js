import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { View, StyleSheet, FlatList } from "react-native";

export default function Profit({navigation}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    // Simulating an asynchronous operation
    setIsSubmitting(true);
    setTimeout(() => {
      // Perform your actual submission logic here
      setIsSubmitting(false);
    }, 2000); // Simulating a 2-second delay for the operation
  };
  const handleFruitSelect = (selectedFruit) => {
    console.log("Selected fruit: ", selectedFruit);
  };

  const handleLogout = () => {
    navigation.navigate("Details");
  }

  const renderRow = (rowData) => {
    return (
      <View style={styles.row}>
        <Text style={styles.labelText}>{rowData.label}</Text>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            initialItems={rowData.items}
            onItemSelect={handleFruitSelect}
            style={{ elevation: rowData.elevation || 0 }}
          />
        </View>
      </View>
    );
  };

  const data = [
    {
      label: "Select Amount",
      items: [
        { label: "4999", value: "4999" },
        { label: "2499", value: "2499" },
        { label: "999", value: "999" },
        { label: "499", value: "499" },
      ],
      elevation: 1,
    },
    {
      label: "Times Per Round",
      items: [
        { label: "30", value: "30" },
        { label: "20", value: "20" },
        { label: "10", value: "10" },
      ],
    },
    {
      label: "Amount per round",
      items: [
        { label: "400", value: "400" },
        { label: "300", value: "300" },
        { label: "200", value: "200" },
        { label: "100", value: "100" },
      ],
      elevation: 3,
    },
  ];

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => renderRow(item)}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => <Text variant="headlineMedium">Profit: </Text>}
      ListFooterComponent={() => (
        <>
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={isSubmitting}
            disabled={isSubmitting}
            style={styles.button}
          >
            {isSubmitting ? (
              <ActivityIndicator animating={true} color="#ffffff" />
            ) : (
              "Spin"
            )}
          </Button>

          <Button
            mode="contained"
            onPress={handleLogout}
            // loading={isSubmitting}
            disabled={isSubmitting}
            style={styles.button}
          >
            Logout
          </Button>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  button: {
    width: "100%",
    marginBottom: 10,
  },
});
