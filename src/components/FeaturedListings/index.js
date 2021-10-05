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
  ProductButton
} from './FeaturedListings';

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} />
              <ProductInfo>
                <p>{product.type}</p>
                <ProductPrice>{product.price}</ProductPrice>
                <p>{product.beds} beds</p>
                <p>{product.baths} baths</p>
                <p>{product.sqft} sqft.</p>
                <ProductTitle>{product.addr}</ProductTitle>


                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
