import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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



const initialFormState = {
  username:'',
  password:'',
  email:'',
  authCode: '',
  formType: 'signUp'
}



function App() {

  const [formState, updateFormState] = useState(initialFormState)

  function onChange(e) {
    e.persist()
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value}))
  }



 
  const { formType } = formState
  
  return (  

    <Router>

<AmplifySignOut />

              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/listings/" component={Listings} />
              <Route exact path="/listings/:slug" component={SingleListing} />

     
    </Router>
  );
}

export default App;