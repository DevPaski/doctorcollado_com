import React from 'react';
import './navdots-cc.css';

import { Link, animateScroll as scroll } from "react-scroll";

import '../../../Main';

const NavDots = () => { {/* Retocar para varios tamaños */}
  return (
    <div className='navdots-cc'>
        <ul className='navdots__list'>
            <Link className='dot' activeClass='active' to='Dermolipectomia-Braquial' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Dermolipectomia-Abdominal' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Dermolipectomia-Cinturon' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Elevacion-Gluteos' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Aumento-Gluteos' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Dermolipectomia-Crural' offset={-1} spy={true} smooth={true} duration={500} />
            <Link className='dot' activeClass='active' to='Liposucción' offset={-1} spy={true} smooth={true} duration={500} />
        </ul>
    </div>
  )
}

export default NavDots