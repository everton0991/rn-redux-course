/**
 * Import libs
 * fetch URL http://rallycoding.herokuapp.com/api/music_albums
 *
 * @flow
 */
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'

/** Props type */
type Props = {}

/** State type */
type State = {
  albums: Array<Object>
}

/**
 * Create Component
 */
class AlbumList extends Component<Props, State> {
  state = {
    albums: []
  }

  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums', {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        this.setState({
          albums: data
        })
      })
  }

  renderAlbums = () => {
    const { albums } = this.state
    return albums.map<Object>(album => (
      <AlbumDetail key={album.title} album={album} />
    ))
  }

  render() {
    return (
      <ScrollView style={{ paddingBottom: 20 }}>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

/**
 * Export component
 */
export default AlbumList
