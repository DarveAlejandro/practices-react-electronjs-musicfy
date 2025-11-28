
// ------------------------------------------
// Routes For Public Users.
// ------------------------------------------

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { button } from "semantic-ui-react";
import { Auth } from "../pages/Auth"

export default function Public() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
