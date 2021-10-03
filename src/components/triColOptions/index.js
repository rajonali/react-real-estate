import React from 'react';
import {
    OptionsContainer,
    OptionsWrapper,
    OptionsHeading,
    OptionsTitle,
    OptionsCard,
    OptionsImg,
    OptionsInfo,
    OptionsDesc,
    OptionsPrice,
    OptionsButton
  } from './triColOptions';
  

  
const TriColOptions = ({data, heading}) => {
  return (
<OptionsContainer>

<OptionsHeading>{heading}</OptionsHeading>
      <OptionsWrapper>

{data.map((listing, index) => {
          return (
            <OptionsCard key={index}>
              <OptionsImg src={listing.img} alt={listing.alt} />
              <OptionsInfo>
                <OptionsTitle>{listing.title}</OptionsTitle>
                <OptionsInfo>{listing.desc}</OptionsInfo>
                <OptionsButton>{listing.button}</OptionsButton>
              </OptionsInfo>
            </OptionsCard>
          );
        })}
        </OptionsWrapper>
</OptionsContainer>
  );
};

export default TriColOptions;
