import React, { useState }from 'react'
import "./Auth.scss";
import { AuthOptions, LoginForm, RegisterForm} from "../../components/Auth"


export default function Auth() {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const [formToRender,setFormToRender] = useState(null);

  const openAuthOptions = () => setFormToRender("Login");
  const openLogin       = () => setFormToRender("Login");
  const openRegister    = () => setFormToRender("Login");
  const goBack          = () => setFormToRender(null);

    if(formToRender === "AuthOptions"){
      return <AuthOptions/>
    }if(formToRender === "Login"){
      return <LoginForm/>
    }if(formToRender === "register"){
      return <RegisterForm/>  
    }
  }


  // -----------------------------------------------------------
  // View.
  // -----------------------------------------------------------   
  return (
    <div>
        {getFormToRender()}
    </div>
  )
}
