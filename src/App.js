import React from 'react';
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./scss/global.scss";
import { Admin, Public } from "./routes";
import { Auth } from "./pages/Auth";


export default function App() {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const auth = getAuth();
  const [user, setUser] = useState(undefined);

  // Asigna a user el usuario auth de firebase
  onAuthStateChanged(auth, (user) => {
    setUser( null );// {user}
  });
  
  // -----------------------------------------------------------
  // Component View.
  // -----------------------------------------------------------   

  return user ? <Admin /> : <Auth />;
}

