import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";


const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
    backgroundColor: "transparent",
  },
  spaceBelow: {
    marginBottom: 10,
  },
  button: {
    width: "100%",
    // backgroundColor: 'white', // Change to the color you want for the button background
  },
});

function Details({ navigation }) {
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum"),
    accessCode: Yup.string().required("Access code is required"),
  });
  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(values);
      actions.setSubmitting(false);
      navigation.navigate("Profit");
    }, 1000);
  };

  return (
    <View
      style={{
        backgroundColor: "#212121",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20, // Add padding to the View
      }}
    >
      <Formik
        initialValues={{ phoneNumber: "", password: "", accessCode: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          // errors,
          isSubmitting,
        }) => (
          <>
            <TextInput
              label="Enter Phone Number"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              // error={errors.phoneNumber}
              keyboardType="phone-pad"
              disabled={isSubmitting}
              style={[styles.fullWidth, styles.spaceBelow]}
              textColor="white"
              placeholder="07XXXXXXXX"
              textAlign="center"
              textAlignVertical="center"
              theme={{
                colors: {
                  primary: "white",
                  text: "white",
                  placeholder: "white",
                  background: "transparent",
                  surface: "red",
                },
              }}
            />
            <TextInput
              label="Enter Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              // error={errors.password}
              secureTextEntry
              disabled={isSubmitting}
              style={[styles.fullWidth, styles.spaceBelow]}
              textColor="white"
              placeholder="xxxxxx"
              theme={{ colors: { primary: "white" } }} // Set the color of the input text
            />
            <TextInput
              label="Enter Access Code"
              value={values.accessCode}
              onChangeText={handleChange("accessCode")}
              onBlur={handleBlur("accessCode")}
              // error={errors.accessCode}
              disabled={isSubmitting}
              style={[styles.fullWidth, styles.spaceBelow]}
              textColor="white"
              placeholder="xxxx"
              theme={{ colors: { primary: "white" } }} // Set the color of the input text
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              loading={isSubmitting}
              disabled={isSubmitting}
              style={styles.button}
            >
              Login
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Details;
