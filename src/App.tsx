import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePageMUI from './Components/Home/HomePageMui';
import HomePageANT from './Components/Home/HomePageAnt';
import LoginPageMUI from './Components/Login/LoginPageMUI';
import LoginPageANT from './Components/Login/LoginPageANT';
import { Switch } from 'react-router-dom';
import ProductForm from './Components/ProductsANT/ProductForm';
import ProductFormMui from './Components/ProductsMUI/ProductFormMui';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPageMUI} />
          <Route path="/loginAnt" component={LoginPageANT} />
          <Route path="/homeMUI" component={HomePageMUI} />
          {/* <Route path="/Products" component={ProductForm} /> */}
          <Route path="/Products" component={ProductFormMui} />
          <Route path="/homeANT" component={HomePageANT} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
