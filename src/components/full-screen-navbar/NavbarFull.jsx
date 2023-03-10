import React, { useState } from 'react';
import './navbar_full.css';

import '../../Main'

import { Link, animateScroll as scroll } from "react-scroll";

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarFull = () => {
    const [ hidden, setHidden ] = useState(true);

    return (
        <div className='main__menu'>
            <p
            onClick={() => setHidden(s => !s)}
            style={
                    {
                        zIndex: 30,
                        right: 0,
                        marginRight: '7vw',
                        marginTop: '13vh',
                        cursor: 'pointer',
                        color: '#fff',
                        fontSize: 30,
                        fontWeight: 'bold',
                        display: 'flex',
                        position:'absolute',
                        flex: 1
                    }
                }
            >
                <div style={{marginTop: -5}}>
                    <MenuIcon style={{fontSize:40}} />
                </div>
                Menu
            </p>

            {
                !hidden
                ? 
                <div className='navbar__menu' onWheel={() => setHidden(s => !s)}>
                    <div className='navbar__controls'>
                        <CloseIcon 
                            onClick={() => setHidden(s => !s)}
                            style={
                                {
                                    fontSize: 80,
                                    position:'absolute',
                                    right: 0,
                                    marginTop: '6rem',
                                    marginRight: '9rem',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }
                            }
                        />
                        <ul className='fullnav__links'>
                            <li>
                                <a><h2 className='fullnav__h2'>Nosotros</h2></a>
                            </li>
                            <li>
                                <h2 className='fullnav__h2'>Cirugia Est??tica</h2>
                                <ul className='fullnav__cirugia_estetica'>  
                                    <li>
                                        <h3>Cirugia Facial</h3>
                                        <ul className='fullnav__submenu'>
                                            <li><a href="#home">Blefaroplastia</a></li>
                                            <li><a href="#home">Rinoplastia</a></li>
                                            <li><a href="#home">Otoplastia</a></li>
                                            <li><a href="#home">Aumento de p??mulos</a></li>
                                            <li><a href="#home">Remodelado de labios</a></li>
                                            <li><a href="#home">Aumento del ment??n</a></li>
                                            <li><a href="#home">Lifting</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Cirugia Corporal</h3>
                                        <ul className='fullnav__submenu'>
                                            <li><a href="#home">Dermolipectom??a braquial</a></li>
                                            <li><a href="#home">Dermolipectom??a abdominal</a></li>
                                            <li><a href="#home">Dermolipectom??a en cintur??n</a></li>
                                            <li><a href="#home">Elevaci??n de gl??teos</a></li>
                                            <li><a href="#home">Aumento de gl??teos</a></li>
                                            <li><a href="#home">Dermolipectom??a crural</a></li>
                                            <li><a href="#home">Liposucci??n</a></li>
                                            <li><a href="#home">Lipotransferencia</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Cirugia Mamaria</h3>
                                        <ul className='fullnav__submenu'>
                                            <li><a href="#home">Aumento de mamas</a></li>
                                            <li><a href="#home">Elevaci??n de mamas</a></li>
                                            <li><a href="#home">Reducci??n de mamas</a></li>
                                            <li><a href="#home">Mamas tuberosas</a></li>
                                            <li><a href="#home">Ginecomastia</a></li> 
                                        </ul>
                                    </li>
                                    <li>
                                        <h3>Cirugia Intima Femenina</h3>
                                        <ul className='fullnav__submenu'>
                                            <li><a href="#home">Injerto de grasa</a></li>
                                            <li><a href="#home">Implantes de relleno inyectables</a></li>
                                            <li><a href="#home">Labioplastia</a></li>
                                            <h5>Cl??toris</h5>
                                            <li><a href="#home">Hipertrofia del capuch??n</a></li>
                                            <li><a href="#home">Hipertrofia del cl??toris</a></li>
                                            <li><a href="#home">Descolgamiento del cl??toris</a></li>
                                            <h5>Pubis</h5>
                                            <li><a href="#home">Descolgamiento</a></li>
                                            <li><a href="#home">Lipodistrofia</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2 className='fullnav__h2'>Medicina Est??tica</h2>
                                <ul>
                                    <li><a href="#home">Rejuvenicimiento de cara y cuello</a></li>
                                    <li><a href="#home">Mesoterapia facial</a></li>
                                    <li><a href="#home">Peeling quimico</a></li>
                                    <li><a href="#home">Implantes inyectables de relleno</a></li>
                                    <li><a href="#home">Arrugas de expresi??n</a></li>
                                    <li><a href="#home">Hilos tensores</a></li>
                                </ul>
                            </li>
                            <li>
                                <h2 className='fullnav__h2'>Cirugia Reparadora</h2>
                                <ul>
                                    <li><a href="#home">Cicatrices</a></li>
                                    <li><a href="#home">Tumores</a></li>
                                    <li><a href="#home">Reconstrucci??n de mama</a></li>
                                    <li><a href="#home">Reconstrucci??n de oreja</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                : null    
            }
        </div>
    )
}

export default NavbarFull