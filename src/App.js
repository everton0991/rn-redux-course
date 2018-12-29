/**
 * Import the SafeArea Component
 * Also the default component of the App
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import store from './store'
import Router from './router'

/**
 * This is the default component
 */
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDZleqzQ3r2947wRUDu-mWSQO_fNT4LpMA',
      authDomain: 'rn-auth-d38e4.firebaseapp.com',
      databaseURL: 'https://rn-auth-d38e4.firebaseio.com',
      projectId: 'rn-auth-d38e4',
      storageBucket: 'rn-auth-d38e4.appspot.com',
      messagingSenderId: '515706840870'
    }

    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
