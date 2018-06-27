import React, { Component } from 'react';
import './App.css';
import "./styles/basscss-flexible-fit750px.css";
import './styles/global.css';
import './styles/component.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'mobx-react';
import appStore from './appStore';
import './libs/flexible/flexible'

import Home from './views/home';
import Certificate from './views/certificate';
import Send from './views/send';
import EditInfo from './views/edit-info';
import MyExpress from './views/my-express';
import OrderDetail from './views/order-detail';
import ServerMap from './views/server-map';

class App extends Component {
  render() {
    return (
        <Provider {...appStore}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/certificate" component={Certificate}/>
                    <Route path="/send" component={Send}/>

                    <Route path="/edit-info" component={EditInfo}/>
                    <Route path="/my-express" component={MyExpress}/>
                    <Route path="/order-detail" component={OrderDetail}/>                
                    <Route path="/server-map" component={ServerMap}/>                
                </Switch>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
