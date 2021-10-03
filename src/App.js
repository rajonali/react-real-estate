import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import TriColOptions from './components/triColOptions';
import {listingData} from './components/triColOptions/data'
import FeaturedListings from './components/FeaturedListings'
import {listingData2} from './components/FeaturedListings/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <TriColOptions data={listingData} heading="Whether you’re buying, selling or renting, we can help you move forward." />
      <Feature />
      <FeaturedListings data={listingData2} heading="Featured Listings" />

      <Footer />
    </Router>
  );
}

export default App;