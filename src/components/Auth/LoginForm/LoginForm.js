import React from 'react'
import "./LoginForm.scss";
import { Button } from "semantic-ui-react";

export default function LoginForm( props ) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const { goBack, openRegister } = props;

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   
  return (
    <div className="bg-login-form">
        <h1>Inicar Sesión</h1>

        <Button secondary onClick={goBack}>Atras</Button>
        <Button primary onClick={openRegister}>Register</Button>
    </div>
  )
}
