import React, {Component} from 'react';
import './App.css';
import {SportStoreDataStore} from './data/DataStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {ShopConnector} from './shop/ShopConnector';
import {Admin} from './admin/Admin';

class App extends Component {
  render(){
    return <Provider store={SportStoreDataStore}>
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Route path="/admin" component={Admin} />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
    
  }
}

export default App;
