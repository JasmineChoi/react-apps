import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'mobx-react';
import appStore from './appStore';
import './libs/flexible/flexible'

import Home from './views/home';

class App extends Component {
  render() {
    return (
        <Provider {...appStore}>
            <BrowserRouter>
                <Route>
                    <Route path="/" component={Home}/>

                </Route>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
