import React, {useState} from 'react';
import {
  BrowserRouter, Route, Link, Switch
} from 'react-router-dom';
import { css } from '@emotion/css';

import Navbar from '../src/components/Navbar'

import Home from './pages/Home'
import Profile from './Profile';
import Protected from './Protected';
import ProtectedRoute from './ProtectedRoute';
import Listings from './pages/Listings'
import SingleListing from './pages/singleListing';
import theme from './theme';
import Sidebar from './components/Sidebar'
const { primaryColor } = theme;

export default function Router() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <div className={containerStyle}>
        <Switch>
          <Route path="/" component={Home} exact />
          <ProtectedRoute path="/listings/" exact component={Listings} />
          <Route path="/profile/" exact component={Profile} />
          <ProtectedRoute exact path="/listings/:slug" component={SingleListing} />

          { /* For a protected route, use the ProtectedRoute component */ }
          <ProtectedRoute
            exact
            path="/app"
            component={Protected}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const linkTitleStyle = css`
  text-decoration: none;
`

const containerStyle = css`
  padding: 0px 30px;
`

const linkStyle = css`
  color: white;
  text-decoration: none;
  margin-left: 10px;
  font-size: 18px;
  &:hover {
    color: #ddd;
  }
`

const headingStyle = css`
  background-color: ${primaryColor};
  padding: 30px;
  display: flex;
  align-items: center;
`

const titleStyle = css`
  color: white;
  margin: 0;
  font-size: 32px;
  margin-right: 50px;
`