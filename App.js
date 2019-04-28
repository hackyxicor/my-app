import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './App/Navigation/index.navigation';
import store from './App/Store/index.store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
