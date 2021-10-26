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
  HeroH2,
  HeroP,
  HeroBtn,
  searchbar,
  searchlabel,
  searchqueryinput,
  searchquerysubmit,
  searchwrapper,
  searchbutton,
} from './HeroElements';


import { Button, Form, Checkbox, Dropdown, Menu } from 'semantic-ui-react'
import _ from 'lodash'


import { FaSearch } from 'react-icons/fa';

import faker from 'faker'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <HeroContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>

        
        <HeroItems>
          <HeroH2>Find your next tiny getaway</HeroH2>
          <h3>Discover entire homes and private rooms perfect for any trip.</h3>

        


          <Form>
          <Form.Group fluid widths='equal'>
          <Form.Input fluid style={{width:'500px',}} label='Location' placeholder='Baton Rouge, LA' />
        </Form.Group>

        <Form.Group fluid>
          <Form.Input fluid label='Check-In' style={{width:'200px',}} placeholder='Check-In' />
          <Form.Input fluid label='Check-Out' style={{width:'200px',}} placeholder='Check-Out' />

        </Form.Group>
        
        <Button><FaSearch/> Search</Button>
      </Form>


          
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
