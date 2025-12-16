import React from 'react'
import { Form, Icon } from "semantic-ui-react";
import "./RegisterForm.scss";

export default function RegisterForm( props ) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const { goBack, openLogin } = props; // Sistema basico de navegación sin uso de momento

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------  
  return (
    
    <div className="register-form">
      <h1>¡Empieza a escuchar con una cuenta de Musicfy Gratis!</h1>
      <Form>
        <Form.Input className="form-field"
          type="text"
          placeholder="Correo Electronico" 
          icon="mail outline"
          error={true}
        />
        <Form.Input className="form-field"
          type="password"
          placeholder="Contraseña" 
          icon={<Icon name="eye" link onClick={ () => console.log("Show Password") }/>}
        />
        <Form.Input className="form-field"
          type="text"
          placeholder="¿Como deberiamos llamarte?" 
          icon="user circle outline"
        />
        <Form.Button type="submit" primary className="form-field" fluid>
            Continuar
        </Form.Button>
      </Form>

      <div className="register-form__options">
          <p onClick={goBack}>Volver</p> 
          <p>
            ¿Ya tienes Musicfy?
            <span onClick={openLogin}>
              Inicia Sesión
            </span>
          </p>
      </div>
    </div>
  )
}
