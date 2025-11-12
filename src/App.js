import React from 'react';
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./scss/global.scss";
/* import { Button, Icon, Label } from 'semantic-ui-react'; */

import { LoggedNavigation, PublicNavigation } from "./routes";



export default function App() {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const auth = getAuth();
  const [user, setUser] = useState(undefined);

  // Asigna a user el usuario auth de firebase
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  
  // -----------------------------------------------------------
  // Component View.
  // -----------------------------------------------------------   

  return user ? <LoggedNavigation /> : <PublicNavigation />;
}
