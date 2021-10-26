import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

import { Button } from 'semantic-ui-react'



const ButtonExampleButton = () => <Button>Click Here</Button>


const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Become a Host!</h1>
      <p>Earn up to $1,930/month by sharing your space in Baton Rouge.</p>
      <ButtonExampleButton>Create A Listing</ButtonExampleButton>
    </FeatureContainer>
  );
};

export default Feature;
