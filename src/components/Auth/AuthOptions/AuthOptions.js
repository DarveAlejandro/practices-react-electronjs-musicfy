import React from 'react'
import { Button } from "semantic-ui-react";

export default function AuthOptions() {
  return (
    <div style={{background: "#000"}}>

        <h1>Auth Options</h1>

        <Button primary>Login</Button>
        <Button secondary>Register</Button>
    </div>
  )
}
