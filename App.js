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
import MainBar from './app/container/MainBar';
import { Router, Scene } from 'react-native-router-flux';

class App extends Component {

  render = () => {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='mainBar'
            component={MainBar}
            hideNavBar
            initial
          >
            <Scene
              key='reddit'
              component={RedditPage}
              hideNavBar
              initial
            />
            <Scene
              key='git'
              component={GitPage}
              hideNavBar
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;