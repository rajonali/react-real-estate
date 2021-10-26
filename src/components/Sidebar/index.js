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

import { Button } from 'semantic-ui-react'





const Sidebar = ({ isOpen, toggle }) => {



  const context = useContext(UserContext);

  let location = useLocation();
  useEffect(() => {
    context.updateCurrentUser()
  }, [location]);


  const isAuthenticated = context.user ? true : false
  const isLoaded = context.isLoaded
  

  const signOut = () => {
    Auth.signOut();
  }


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>


      {
isAuthenticated ? 

(
<SidebarLink to='/'>My Profile</SidebarLink>
)
: (<span />)
}

        <SidebarLink to='/listings'>See All Listings</SidebarLink>
        <SidebarLink to='/'>Become a Host</SidebarLink>


      
      
      </SidebarMenu>

<div style={{ display:'flex', flex:1, justifyContent:'center', alignItems:'center'}}>
      {isAuthenticated ? (<Button light outline border="0" onClick={() => signOut()}><Link to="/">Sign Out</Link></Button>) : (<Button light outline border="0" style={{width:'50%'}}><Link to="/profile">Login</Link></Button>)}
</div>
    </SidebarContainer>
  );
};

export default Sidebar;
