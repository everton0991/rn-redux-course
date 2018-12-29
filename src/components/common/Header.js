/**
 * Import components View and Text from React Native
 *
 * @flow
 */
import React from 'react'
import { View, Text } from 'react-native'

/**
 * Receives a string with the title of the current page
 */
type Props = {
  headerText: string
}

/**
 * Componenet Header contains the App current page Title
 */
const Header = (props: Props) => {
  const { headerText } = props
  const { viewStyle, textStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

/**
 * Styles the header container and it`s texts.
 */
const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 1
  },
  textStyle: {
    color: '#9e15c4',
    fontSize: 20
  }
}

export default Header
