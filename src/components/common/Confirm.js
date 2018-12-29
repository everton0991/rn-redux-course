/**
 * Default imports
 *
 * @flow
 */
import * as React from 'react'
import { View, Text, Modal } from 'react-native'
import Button from './Button'
import CardSection from './CardSection'

type Props = {
  children: React.Node,
  visible: boolean,
  onAccept: () => void,
  onDecline: () => void,
}

const Confirm = (props: Props) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles
  const {
    children, onAccept, onDecline, visible
  } = props

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    color: '#9e15c4',
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export default Confirm
