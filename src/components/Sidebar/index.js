import React, {useContext, useEffect} from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import UserContext from '../../UserContext'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {Auth, Hub} from 'aws-amplify';
import {
  useLocation,
  Route,
  Redirect,
Link
} from 'react-router-dom'





const Sidebar = ({ isOpen, toggle }) => {



  const context = useContext(UserContext);

  let location = useLocation();
  useEffect(() => {
    context.updateCurrentUser()
  }, [location]);


  const isAuthenticated = context.user ? true : false
  const isLoaded = context.isLoaded
  


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/listings'>Buy A Home</SidebarLink>
        <SidebarLink to='/'>Sell A Home</SidebarLink>
        <SidebarLink to='/'>Rent A Home</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
    
        <SidebarRoute to='/'>Contact Us</SidebarRoute>

      </SideBtnWrap>
      {isAuthenticated ? (<AmplifySignOut />) : (<button><Link to="/profile">Login</Link></button>)}

    </SidebarContainer>
  );
};

export default Sidebar;
