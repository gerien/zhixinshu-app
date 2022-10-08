import React, { Component } from 'react';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import {Frame} from './components/Frame';
import { Lesson } from './pages/Lesson';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';

export default class App extends Component {
  render() {
    return (
      <>
        <Frame>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/lesson" element={<Lesson/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Frame>
      </>
        
    );
  }
}

