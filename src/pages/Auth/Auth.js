import React, { useState } from 'react'
import { AuthOptions, LoginForm, RegisterForm} from "../../components/Auth";
import { Image } from "semantic-ui-react";
import { logoNameWhite } from '../../assets';
import "./Auth.scss";

export default function Auth() {

  // -----------------------------------------------------------
  // Atributes && Methods.
  // -----------------------------------------------------------   

  const [formToRender,setFormToRender] = useState("openAuthOptions");

  const openLogin = () => setFormToRender("openLogin");
  const openRegister = () => setFormToRender("openRegister");
  const goBack = () => setFormToRender("openAuthOptions");
  
  const renderForm = () => {
    if(formToRender === "openAuthOptions"){
      return <AuthOptions openLogin={openLogin} openRegister={openRegister} />
    }if(formToRender === "openLogin"){
      return <LoginForm goBack={goBack} openRegister={openRegister}/>
    }if(formToRender === "openRegister"){
      return <RegisterForm goBack={goBack} openLogin={openLogin}/>  
    }
  }

  // -----------------------------------------------------------
  // View.
  // -----------------------------------------------------------  

  return(
    <div className="auth">
      <div className="auth__content">
        <Image
          src={logoNameWhite}
          alt="Musicfy"
          className="auth__content-logo"
        />
        { renderForm()}
      </div>
    </div>
  )}

