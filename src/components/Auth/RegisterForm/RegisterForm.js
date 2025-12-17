import React from 'react'
import { Form, Icon } from "semantic-ui-react";
import "./RegisterForm.scss";
import { useFormik } from "formik";
import { initialValues } from './RegisterForm.data';


export default function RegisterForm( props ) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const { goBack, openLogin } = props; // Sistema basico de navegación sin uso de momento

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {

      console.log('Registro Ok');
      console.log(formValue);
    }
  })

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------  
  return (
    
    <div className="register-form">
      <h1>¡Empieza a escuchar con una cuenta de Musicfy Gratis!</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input className="form-field"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Correo Electronico" 
          icon="mail outline"
          error={true}
          
        />
        <Form.Input className="form-field"
          name="password"
          type="password"
          placeholder="Contraseña" 
          icon={<Icon name="eye" link onClick={ () => console.log("Show Password") }/>}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Form.Input className="form-field"
          name="username"
          type="text"
          placeholder="¿Como deberiamos llamarte?" 
          icon="user circle outline"
          value={formik.values.username}
          onChange={formik.handleChange}
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
