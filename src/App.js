import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCa4QRph4XX7FmEOEWr55FKdV4ebzS8oTo',
      authDomain: 'empmanager-a6d5a.firebaseapp.com',
      databaseURL: 'https://empmanager-a6d5a.firebaseio.com',
      projectId: 'empmanager-a6d5a',
      storageBucket: 'empmanager-a6d5a.appspot.com',
      messagingSenderId: '319460765022'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
