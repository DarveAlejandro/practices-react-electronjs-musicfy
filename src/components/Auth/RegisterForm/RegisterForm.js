import { React, useState }from 'react'
import { Form, Icon } from "semantic-ui-react";
import "./RegisterForm.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from './RegisterForm.data';
import { Auth } from "../../../api"


const auth = new Auth();

export default function RegisterForm( props ) {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const { goBack, openLogin } = props;  // Navigatión Between forms
  const [ showPassword, setShowPassword ] = useState(false); 
  const onShowHiddenPassword = () => setShowPassword(prevState => !prevState) 
 
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        await auth.register(formValue.email, formValue.password);
      }catch(error){
        console.error(error);
      }
    }
  })

  console.log(formik.errors);
  // -----------------------------------------------------------
  // Component View.
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
          error={formik.errors.email}
        />
        <Form.Input className="form-field"
          name="password"
          type="password"
          placeholder="Contraseña" 
          icon={
            <Icon 
              name={showPassword ? "eye slash" : "eye"} 
              link onClick={ () => console.log("Show Password") }
            />
          }
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Form.Input className="form-field"
          name="username"
          type="text"
          placeholder="¿Como deberiamos llamarte?" 
          icon="user circle outline"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Button type="submit" primary className="form-field" fluid loading={formik.isSubmitting}>
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
