
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { GlobalStyle } from '../globalStyles';
import TriColOptions from '../components/triColOptions';
import Feature from '../components/Feature';
import FeaturedListings from '../components/FeaturedListings'
import DualColOptions from '../components/DualColOptions';
import Footer from '../components/Footer';
import {listingData} from '../components/triColOptions/data'
import {listingData2} from '../components/FeaturedListings/data'

const home = () => {
  return (
    <>
    
 <GlobalStyle />
 <Hero />
 
 <TriColOptions data={listingData} heading="Whether you’re buying, selling or renting, we can help you move forward." />
 <Feature />
 <FeaturedListings data={listingData2} heading="Featured Listings" />
 <DualColOptions />
 <Footer />
    </>
  );
};

export default home;