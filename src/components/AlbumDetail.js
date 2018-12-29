/**
 * Import React Native components, and the components to build the
 * AlmbumDetail Card.
 *
 * @flow
 */
import React from 'react'
import {
  View,
  Text,
  Image,
  Linking
} from 'react-native'
import { Card, CardSection, Button } from './common'

/**
 * Componenet must receive a  album Object with the album attributes
 */
type Props = {
  album: {
    title: string,
    thumbnail_image: string,
    artist: string,
    image: string,
    url: string
  }
}

/**
 * Component AlbumDetail responsible for showing the a card
 * with 3 sections: A Header with title and artist, A section with Image
 * and another with a buy button.
 */
const AlbumDetail = (props: Props) => {
  const { album } = props
  const {
    headerContentStyle,
    headerTitleStyle,
    headerSubtitleStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    imageContainer,
    imageStyle
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTitleStyle}>{album.title}</Text>
          <Text style={headerSubtitleStyle}>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection style={{ borderBottomWidth: 0 }}>
        <View style={imageContainer}>
          <Image
            style={imageStyle}
            source={{ uri: album.image }}
          />
        </View>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>
          Buy
        </Button>
      </CardSection>
    </Card>
  )
}

/**
 * Styles the Header content, the album image and the thumbnail.
 */
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerTitleStyle: {
    fontSize: 18,
    color: '#9e15c4'
  },
  headerSubtitleStyle: {
    fontSize: 12,
    color: '#9e15c4'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9e15c4'
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative',
    marginBottom: 5
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: 300
  }
}

export default AlbumDetail
