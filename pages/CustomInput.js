import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { HelperText } from 'react-native-paper'

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  
  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          hasError && styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      <HelperText type="error" visible={hasError}>
        {errors[name]}
      </HelperText>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '200%',
    margin: 10,
    backgroundColor: 'white',
    // borderColor: 'gray',
    borderBottomWidth: 1,
   borderBottomColor: 'gray',
    // borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorInput: {
    borderColor: 'red',
  }
})

export default CustomInput