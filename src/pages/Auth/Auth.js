import React, { useState } from 'react'
import "./Auth.scss";
import { AuthOptions, LoginForm, RegisterForm} from "../../components/Auth"


export default function Auth() {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const [formToRender,setFormToRender] = useState("openAuthOptions");

  const openLogin = () => setFormToRender("openLogin");
  const openRegister = () => setFormToRender("openRegister");
  const goBack = () => setFormToRender("openAuthOptions");

  // -----------------------------------------------------------
  // View.
  // -----------------------------------------------------------  

    if(formToRender === "openAuthOptions"){
      return <AuthOptions openLogin={openLogin} openRegister={openRegister} />
    }if(formToRender === "openLogin"){
      return <LoginForm goBack={goBack} openRegister={openRegister}/>
    }if(formToRender === "openRegister"){
      return <RegisterForm goBack={goBack} openLogin={openLogin}/>  
    }
}

