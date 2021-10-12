import React, { useEffect, useState } from 'react'
import { Auth, Amplify } from 'aws-amplify'
import { Switch, Route, useHistory } from "react-router-dom";


import awsconfig from './aws-exports';
import {AmplifySignOut , withAuthenticator } from '@aws-amplify/ui-react';



Amplify.configure(awsconfig);



const isAuthenticated = async () => {
  try {
    return await Auth.currentSession().isValid();
  } catch (error) {
    return false;
  }
};

function PrivateRoute({ children, ...rest }) {

  const [auth, setAuth] = useState(false);

  const isAuthenticated = () => {

      setAuth(false);

      Auth.currentSession().then( response => {
          if(response.isValid()) {
              setAuth(true);
          } else {
              redirectToLogin();
          }
      }).catch(() => {
          redirectToLogin();
      });
  }


  const history = useHistory()
  
  const redirectToLogin = () => {
      history.push('/login');
  }

  useEffect(() => {
      isAuthenticated();
  }, []);

  return (
      <Route {...rest}>
          { auth ? children : null }
      </Route>
  )
}

export default withAuthenticator(PrivateRoute);