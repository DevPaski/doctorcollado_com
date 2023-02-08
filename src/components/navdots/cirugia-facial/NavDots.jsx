import React from 'react';
import './navdots-cf.css';

import { Link, animateScroll as scroll } from "react-scroll";

import '../../../Main';

const NavDots = () => { {/* Retocar para varios tamaños */}
  return (
    <div className='navdots-cf'>
        <ul className='navdots__list'>
            <Link className='dot' activeClass='active' to='Blefaroplastia' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Rinoplastia' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Otoplastia' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Aumento-Pomulos' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Remodelado-Labios' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Aumento-Menton' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Lifting' offset={-1} spy={true} smooth={true} duration={500} />
        </ul>
    </div>
  )
}

export default NavDots