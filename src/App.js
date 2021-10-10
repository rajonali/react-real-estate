import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Listings from './pages/Listings'
import Error from './pages/Error'
import SingleListing from './pages/singleListing';
function App() {
  return (
    <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/listings/" component={Listings} />
              <Route exact path="/listings/:slug" component={SingleListing} />
              <Route component={Error} />

     
    </Router>
  );
}

export default App;