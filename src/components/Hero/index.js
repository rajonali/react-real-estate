import React, { useState, useContext } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
HeroSearchButton,
  QuickListingsButton,
  QuickListings,
  HeroContainer,
  HeroInput,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  searchbar,
  searchlabel,
  searchqueryinput,
  searchquerysubmit,
  searchwrapper,
  searchbutton,
} from './HeroElements';

import UserContext from './UserContext';

import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>

        
        <HeroItems>
          <HeroH1>Change Starts Here</HeroH1>
          <HeroP>Let us help you start the next chapter</HeroP>

          





          <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'auto'}}>
          <HeroInput type="text" placeholder="Baton Rouge, LA" />
          <HeroSearchButton type="submit"><FaSearch/></HeroSearchButton>
          </div>
          <QuickListings>
          <QuickListingsButton>Buy</QuickListingsButton>
          <QuickListingsButton>Sell</QuickListingsButton>
          <QuickListingsButton>Rent</QuickListingsButton>
          </QuickListings>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
