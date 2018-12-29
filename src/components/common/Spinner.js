/**
 * Import view and the spinner component from react native
 *
 * @flow
 */
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

type Props = {
  size: number
}
const Spinner = (props: Props) => {
  const { size } = props
  const { spinnerStyle } = styles

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
}

export default Spinner
