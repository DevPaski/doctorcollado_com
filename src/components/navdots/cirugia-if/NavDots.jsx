import React from 'react';
import './navdots-if.css';

import { Link, animateScroll as scroll } from "react-scroll";

import '../../../Main';

const NavDots = () => { {/* Retocar para varios tamaños */}
  return (
    <div className='navdots-cif'>
        <ul className='navdots__list'>
            <Link className='dot' activeClass='active' to='Pubis' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Labios-Mayores' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Labios-Menores' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Clitoris' offset={-1} spy={true} smooth={true} duration={500} />
        </ul>
    </div>
  )
}

export default NavDots