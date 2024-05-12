import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePageMUI from './Components/Home/HomePageMui';
import HomePageANT from './Components/Home/HomePageAnt';
import LoginPageMUI from './Components/Login/LoginPageMUI';
import LoginPageANT from './Components/Login/LoginPageANT';
import { Switch } from 'react-router-dom';
import ProductForm from './Components/Products/ProductForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/loginMUI" component={LoginPageMUI} />
          <Route exact path="/" component={LoginPageANT} />
          <Route path="/homeMUI" component={HomePageMUI} />
          <Route path="/Products" component={ProductForm} />
          <Route path="/homeANT" component={HomePageANT} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
