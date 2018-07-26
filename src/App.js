import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import ListJson from './components/ListJson'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <ListJson/>
      </Provider>
    );
  }
}

export default App
