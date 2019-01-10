/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RedditPage from './app/container/RedditPage';
import GitPage from './app/container/GitPage';
import { Router, Scene, Drawer } from 'react-native-router-flux';

class App extends Component {

  render = () => {
    return (
      <Router>
        <Scene key='root' tabs={true}>
          <Scene
            key='reddit'
            component={RedditPage}
            title='Reddit'
            initial
          />
          <Scene
            key='git'
            component={GitPage}
            title='Git'
          />
        </Scene>
      </Router>
    );
  }
}

export default App;