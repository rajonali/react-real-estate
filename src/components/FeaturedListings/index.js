import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  TriColInfo
} from './FeaturedListings';

import { withListingConsumer } from "../../context";
import ListingsList from "../../components/ListingsList";



const Products = ({ heading, data, context }) => {
  const { loading, sortedListings, listings } = context;

  
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
      <ListingsList listings={sortedListings} />
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default withListingConsumer(Products);
