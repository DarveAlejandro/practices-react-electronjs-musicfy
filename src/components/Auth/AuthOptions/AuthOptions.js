import React from 'react'
import { Button } from "semantic-ui-react";

export default function AuthOptions() {
  return (
    <div style={{background: "#b2b8afff"}}>

        <h1>Inicia Sesión en Musicfy</h1>

        <Button primary>Login</Button>
        <Button secondary>Register</Button>
    </div> 
  )
}
