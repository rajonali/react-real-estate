import React, { useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { Switch, Route } from "react-router-dom";


import Home from './pages/Home'
import Listings from './pages/Listings'
import Error from './pages/Error'
import SingleListing from './pages/singleListing';


import PrivateRoute from './privateRoute';


import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';



import {Auth, Hub} from 'aws-amplify';



import UserContext from './UserContext';
import Router from './Router';



import './App.css'

const initialFormState = {
  username:'',
  password:'',
  email:'',
  authCode: '',
  formType: 'signUp'
}



function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isLoaded, setIsLoaded] = useState({});


  useEffect(() => {
    updateCurrentUser();
    console.log(currentUser);
    listen();
  }, [])
  
  
  function listen() {
    Hub.listen('auth', (data) => {
      if (data.payload.event === 'signIn') {
        updateCurrentUser();
      }
      if (data.payload.event === 'signOut') {
        updateCurrentUser();
      }
    });
  }



  async function updateCurrentUser(user = null) {
    if (user) {
      console.log(user);
      setCurrentUser(user);
      return
    }
    try {
      const user = await Auth.currentAuthenticatedUser()
      setCurrentUser(user);
      setIsLoaded(true);
    } catch (err) {
      setCurrentUser(null);
      setIsLoaded(true);
    }
  }
  return (
    <UserContext.Provider value={{
      user: currentUser,
      updateCurrentUser: updateCurrentUser,
      isLoaded: isLoaded
    }}>
      <Router />
    </UserContext.Provider>
  );
}




export default App;