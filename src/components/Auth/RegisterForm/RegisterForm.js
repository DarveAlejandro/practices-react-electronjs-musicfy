import React from 'react'
import "./RegisterForm.scss";
import { Form, Icon } from "semantic-ui-react";

export default function RegisterForm( props ) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const { goBack, openLogin } = props; // Sistema basico de navegación sin uso de momento

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------  
  return (
    
    <div className="bg-register-form">
      <h1>¡Empieza a escuchar con una cuenta de Musicfy Gratis!</h1>
      <form className="register-form">
        <Form.Input  class="form-field"
          type="text"
          placeholder="Correo Electronico" 
          icon="mail outline"
          fluid
        />
        <Form.Input className="form-field"
          type="text"
          placeholder="Contraseña" 
          icon={<Icon name="eye" link onClick={ () => console.log("Show Password") }/>}
          fluid
        />
        <Form.Input className="form-field"
          type="text"
          placeholder="¿Como deberiamos llamarte?" 
          icon=" user circle outline"
          fluid
        />
        <Form.Button type="submit" primary className="form-field">
            Continuar
        </Form.Button>
      </form>
    </div>
  )
}
