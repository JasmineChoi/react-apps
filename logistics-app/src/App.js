import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './libs/flexible/flexible'

import Home from './views/home';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Route>
                <Route path="/" component={Home}/>

            </Route>
        </BrowserRouter>
    );
  }
}

export default App;
