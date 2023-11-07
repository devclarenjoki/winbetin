import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";
import {
  ActivityIndicator,
  Button,
  Modal,
  Portal,
  Text,
} from "react-native-paper";
import { View, StyleSheet, FlatList } from "react-native";

export default function Profit({ navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const showModal = () => {
    setVisible(true);
    setCount(0);
  };
  const hideModal = () => {
    setVisible(false);
    setCount(0);
  };
  React.useEffect(() => {
    let interval;
    if (visible) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [visible]);
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
  };

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
            onPress={showModal}
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
            onPress={() => navigation?.navigate("Details")}
            // loading={isSubmitting}
            disabled={isSubmitting}
            style={styles.button}
          >
            Logout
          </Button>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
            >
              <Text>Calculating Profit...don't cancel!</Text>
              <Text>{count}</Text>
              <Button onPress={hideModal}>Close</Button>
            </Modal>
          </Portal>
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
  labelText: {
    zIndex: -1, // Ensure the text is behind the dropdown
  },
  dropdownContainer: {
    flex: 1,
    zIndex: 2, // Ensure the dropdown is in front of the text
  },
  button: {
    width: "100%",
    marginBottom: 10,
  },
});
