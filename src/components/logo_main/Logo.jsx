import React, { useState } from 'react';
import './logo.css';

import '../../Main'

import logo from '../../assets/logo_svg.svg';

import { Link, animateScroll as scroll } from "react-scroll";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Logo = () => {
  return (
    <div className='logo'>
      <Link activeClass='active' to='Home' spy={true} smooth={true} duration={500}>
        <img src={logo} alt='Logo Doctor Collado' />
        <div className='logo__text'>
          <h2>Dr. JM Collado Delfa</h2>
          <hr></hr>
          <h3>Cirugía Plástica y Estética</h3>
        </div>
      </Link>
    </div>
  )
}

export default Logo