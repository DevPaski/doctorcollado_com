import React from 'react';
import './navdots-general.css';

import { Link, animateScroll as scroll } from "react-scroll";

import '../../../Main';

const NavDots = () => { {/* Retocar para varios tamaños */}
  return (
    <div className='navdots_alter'>
        <ul className='navdots__list'>
            <Link className='dot' activeClass='active' to='Home' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Cirugia_Estetica' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Medicina_Estetica' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Cirugia_Reparadora' offset={-1} spy={true} smooth={true} duration={500} />
        </ul>
    </div>
  )
}

export default NavDots