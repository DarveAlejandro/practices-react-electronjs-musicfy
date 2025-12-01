import React from 'react'
import { Button } from "semantic-ui-react";

export default function AuthOptions(props) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const {openLogin, openRegister} = props;

  // -----------------------------------------------------------
  // View.
  // -----------------------------------------------------------  

  return (
    <div style={{background: "#b2b8afff"}}>

        <h1>Inicia Sesión en Musicfy</h1>

        <Button primary onClick={openLogin}>Login</Button>
        <Button secondary onClick={openRegister}>Register</Button>
    </div> 
  )
}
