import React from 'react';
import './navdots-mamaria.css';

import { Link, animateScroll as scroll } from "react-scroll";

import '../../../Main';

const NavDots = () => { {/* Retocar para varios tamaños */}
  return (
    <div className='navdots-cm'>
        <ul className='navdots__list'>
            <Link className='dot' activeClass='active' to='Aumento-Mamas' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Elevacion-Mamas' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Elevacion-Protesis' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Reduccion-Mamas' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Mama-Tuberosa' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Ginecomastia' offset={-1} spy={true} smooth={true} duration={500} />
        </ul>
    </div>
  )
}

export default NavDots