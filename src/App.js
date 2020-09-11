import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MapView from './components/MapView';
import Home from './components/Home';

function App() {
  return (
    // <Router>
      <Switch>
        <Route path='/map'>
          <MapView />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    // </Router>
  );
}

export default App;
