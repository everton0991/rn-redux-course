/**
 * Import TextInput, view and Text from react native
 * to structure the final Input field
 *
 * @flow
 */
import React from 'react'
import { TextInput, View, Text } from 'react-native'

/**
 * Receives the text props for a normal input as well as
 * the onChange method and the secure type boolean.
 */
type Props = {
  label: string,
  value: string,
  placeholder: string,
  secureTextEntry: boolean,
  onChangeText: () => mixed
}

/**
 * Reusable input component that can be a normal text or
 * a password field.
 */
const Input = (props: Props) => {
  const {
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry
  } = props
  const { containerStyle, inputStyle, labelStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  )
}

/**
 * Styles the container, the input itself and it`s label.
 */
const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    color: '#9e15c4',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    color: '#9e15c4',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
}

export default Input
