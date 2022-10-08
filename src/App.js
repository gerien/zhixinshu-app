import React, { Component } from 'react';
import './css/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import {Frame} from './components/common/Frame';
import { Lesson } from './pages/Lesson';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';

/**
 * nest the Routes in a self defined component 'Frame'(mother components)
 * the Frame will get the childrens as a property
 */

export default class App extends Component {
  render() {
    return (
      <>
        <Frame>
            <Routes>
              <Route exact path="/" element={<Navigate replace to="/home"/>}></Route>
                
              <Route path="/home" element={<Home/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/lesson" element={<Lesson/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/contact" element={<Contact/>}/>

              <Route path="*" element={<Navigate replace to="/home"/>}></Route>
            </Routes>
        </Frame>
      </>
        
    );
  }
}

