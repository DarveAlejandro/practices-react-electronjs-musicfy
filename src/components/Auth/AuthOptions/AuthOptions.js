import React from 'react'
import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export default function AuthOptions(props) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const {openLogin, openRegister} = props;

  // -----------------------------------------------------------
  // View.
  // -----------------------------------------------------------  

  return (
    <div className="auth-options">

        <h1>Inicia Sesión en Musicfy</h1>

        <Button className="register" onClick={openRegister}>Registrate Gratis</Button>
        <Button className="login" onClick={openLogin}>Inicia Sesi&oacute;n</Button>
    </div> 
  )
}
