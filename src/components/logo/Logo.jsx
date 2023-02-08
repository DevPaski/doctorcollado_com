import React, { useState } from 'react';
import './logo.css';

import '../../Main'

import logo from '../../assets/logo_svg.svg';

import { Link, animateScroll as scroll } from "react-scroll";

const Logo = () => {
  return (
    <div className='logo'>
      <a href="/">
        <img src={logo} alt='Logo Doctor Collado' />
        <div className='logo__text'>
          <h2>Dr. JM Collado Delfa</h2>
          <hr></hr>
          <h3>Cirugía Plástica y Estética</h3>
        </div>
      </a>
    </div>
  )
}

export default Logo