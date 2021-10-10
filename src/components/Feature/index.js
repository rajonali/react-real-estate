import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Selling A Home?</h1>
      <p>Let us help you get the most out of it!</p>
      <FeatureButton>Create A Listing</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
