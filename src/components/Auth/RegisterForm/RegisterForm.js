import React from 'react'
import "./RegisterForm.scss";
import { Button } from "semantic-ui-react";


export default function RegisterForm( props ) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const { goBack, openLogin } = props;

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------  
  return (
    
    <div className="bg-register-form">
      <h1>¿No tienes Cuenta?</h1>
      <h1>¡Registrate!</h1>

      <Button secondary onClick={ goBack }>Atras</Button>
      <Button primary onClick={ openLogin }>Login</Button>
    </div>
  )
}
