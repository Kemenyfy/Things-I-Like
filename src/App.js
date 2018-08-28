import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Breadcrumbs from 'react-router-dynamic-breadcrumbs'

import './App.css';

import CategoryList from './Components/CategoryList';
import PhotoList from './Components/PhotoList';
import PhotoDetail from './Components/PhotoDetail';

const routes = {
  '/': 'Home',
  '/:category': 'Photo List', 
  '/:category/:id': 'Photo Details'
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Things I Likes</h1>
            <h3 className="">Created by Somebody/Somehow/Maybe</h3>
          </header>
          <Breadcrumbs mappedRoutes={routes} />
          <Switch>
            <Route path="/" exact component={CategoryList}/>
            <Route path="/:category" exact component={PhotoList}/>
            <Route path="/:category/:index" exact component={PhotoDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
