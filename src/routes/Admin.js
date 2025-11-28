
// ------------------------------------------
// Routes For Admin Users.
// ------------------------------------------

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Album, Albums, Artist, Artists, Home, Profile } from "../pages";
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedDate,
  FeedContent,
  CardHeader,
  CardContent,
  Card,
  Feed,
} from 'semantic-ui-react';

export default function Admin() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/album/:id" element={<Album/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/artist/:id" element={<Artist/>}/>
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}



