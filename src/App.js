import React from 'react';
import { getAuth } from "firebase/auth";
import "./scss/global.scss"
import { Button, Icon, Label } from 'semantic-ui-react'

export default function App() {
        console.log(getAuth());
  return (
    <div>
      <h1>Hola Musicfy</h1>
      <hr></hr>

      <Button as='div' labelPosition='right'>
        <Button color='red'>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic color='red' pointing='left'>
          2,048
        </Label>
      </Button>
      <Button as='div' labelPosition='right'>
        <Button basic color='blue'>
          <Icon name='fork' />
          Fork
        </Button>
        <Label as='a' basic color='blue' pointing='left'>
          2,048
        </Label>
      </Button>
    </div>
  )
}
