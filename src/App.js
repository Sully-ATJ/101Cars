import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//We import all the components from the components folder to "App.js"
//Which will then be rendered in 'index.js'

import NavBar from './components/navbar';
import Cars from './components/carsearch';
import CarSlides from './components/carslide';
import Info from './components/aboutus';
import Contact from './components/contact';
import Footer from './components/footnote';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Cars/>
      <CarSlides/>
      <Info/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
