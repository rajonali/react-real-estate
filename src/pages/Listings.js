import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
 import ListingsContainer from "../components/ListingsContainer"; 
const Listings = () => {
  return (
    <>
        <Banner title="our rooms" subtitle="subtitle">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
       <ListingsContainer /> 
    </>
  );
};

export default Listings;