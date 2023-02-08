import React, {useState} from 'react';
import './navbar.css';

// import { Link, animateScroll as scroll } from "react-scroll";
import {Link} from 'react-router-dom';

// import '../../Main'

// import { Link, animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Navbar = () => {
  var [showMenu, setShowMenu] = useState(false);
  var [showSubMenu, setShowSubMenu] = useState(false);
  var [showSubMenuME, setShowSubMenuME] = useState(false);
  var [showSubMenuCR, setShowSubMenuCR] = useState(false);

  var [showSubMenuCF, setShowSubMenuCF] = useState(false);


  function setFalse(){
    setShowMenu = true;
    setShowSubMenu = true;
    setShowSubMenuME = true;
    setShowSubMenuCR = true;

    setShowSubMenuCF = true;
  }

  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links_container'>
            <ul className='navbar__main__menu'>
              <li className='navbar__main__action'>
                  <a href='/nosotros'>
                    Nosotros
                  </a>
              </li>
              <li className='navbar__links__special__borders cestetica'>
                  <p>Cirugía Estética</p>
                  <KeyboardArrowDownIcon />
                  
                  <ul className='dropdown__cestetica'>
                    <li className='cestetica__title'>
                      Cirugía Facial
                      <ul className='cestetica__facial'>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/blefaroplastia">
                            Blefaroplastia
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/rinoplastia">
                            Rinoplastia
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/otoplastia">
                            Otoplastia
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/aumento-pomulos">
                            Aumento de pómulos
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/remodelado-labios">
                            Remodelado de labios
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/aumento-menton">
                            Aumento del mentón
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-facial/lifting">
                            Lifting
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='cestetica__title'>
                      Cirugía Mamaria
                      <ul className='cestetica__mama'>
                        <li>
                          <a href="/cirugia-estetica/cirugia-mamaria/aumento-mamas">
                            Aumento de mamas
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-mamaria/elevacion-mamas">
                            Elevación de mamas
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-mamaria/elevacion-mamas-protesis">
                            Elevación de mamas con prótesis
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-mamaria/reduccion-mamas">
                            Reducción de mamas
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-mamaria/mamas-tuberosas">
                            Mamas tuberosas
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-mamaria/ginecomastia">
                            Ginecomastia
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='cestetica__title'>
                      Cirugía Corporal
                      <ul className='cestetica__corporal'>
                        <li>
                          <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-braquial">
                            Dermolipectomía braquial
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-abdominal">
                            Dermolipectomía abdominal
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-cinturon">
                            Dermolipectomía en cinturón
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-corporal/aumento-gluteos">
                            Aumento de glúteos
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-corporal/dermolipectomia-crural">
                            Dermolipectomía crural
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-corporal/liposuccion">
                            Liposucción
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='cestetica__title'>
                      Cirugía Íntima Femenina
                      <ul className='cestetica__if'>
                        <li>
                          <a href="/cirugia-estetica/cirugia-if/pubis">
                            Pubis (Monte de Venus)
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-if/labios-mayores">
                            Labios Mayores
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-if/labios-menores">
                            Labios Menores
                          </a>
                        </li>
                        <li>
                          <a href="/cirugia-estetica/cirugia-if/clitoris">
                            Clítoris
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
              </li>
              <li className='navbar__links__special__borders mestetica'>
                  <p>Medicina Estética</p>
                  <KeyboardArrowDownIcon />

                  <ul className='dropdown__mestetica'>
                    <li className='drop_top'>
                      <a className='dropdown_top' href="/medicina-estetica/rejuvenecimiento-cara-cuello">
                        Rejuvenecimiento de cara y cuello
                      </a>
                    </li>
                    <li>
                      <a href="/medicina-estetica/mesoterapia-facial">
                        Mesoterapia facial
                      </a>
                    </li>
                    <li>
                      <a href="/medicina-estetica/peeling-quimico">
                        Peeling químico
                      </a>
                    </li>
                    <li>
                      <a href="/medicina-estetica/implantes-inyectables">
                        Implantes inyectables de relleno
                      </a>
                    </li>
                    <li>
                      <a href="/medicina-estetica/arrugas-expresion">
                        Arrugas de expresión
                      </a>
                    </li>
                    <li>
                      <a href="/medicina-estetica/hilos-tensores">
                        Hilos tensores
                      </a>
                    </li>
                  </ul>
              </li>
              <li className='navbar__links__special__borders creparadora'>
                  <p>Cirugía Reparadora</p>
                  <KeyboardArrowDownIcon />

                  <ul className='dropdown__creparadora'>
                    <li className='drop_top'>
                      <a href="/cirugia-reparadora/cicatrices">
                        Cicatrices
                      </a>
                    </li>
                    <li>
                      <a href="/cirugia-reparadora/tumores">
                        Tumores
                      </a>
                    </li>
                    <li>
                      <a href="/cirugia-reparadora/reconstruccion-mama">
                        Reconstrucción de mama
                      </a>
                    </li>
                    <li>
                      <a href="/cirugia-reparadora/reconstruccion-oreja">
                        Reconstrucción de oreja
                      </a>
                    </li>
                  </ul>
              </li>
              <li className='navbar__main__action'>
                <a href="/galeria">
                  Galería
                </a>
              </li>
              <li>
                  <a href="/contacto"><h5 className='navbar__cta'>PIDE CITA</h5></a>
              </li>
            </ul>
        </div>
      </div>


      <div className='navbar__mobile'>
        <MenuRoundedIcon style={{cursor: 'pointer', zIndex: '30', fontSize: '2.5rem'}} onClick={() => setShowMenu(!showMenu)} /> 
        {showMenu &&
          <div className='navbar__mobile__bg' style={{overflowY: 'hidden'}}>
            <CloseRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '110', right: '17vw', top: '10vh', position: 'absolute', color: '#fff'}} onClick={() => setShowMenu(!showMenu)} />

            <ul className='navbar__mobile__items'>
              <li><a href="/nosotros">Nosotros</a></li>

              <li onClick={() => setShowSubMenu(!showSubMenu)}>Cirugía Estética
                {showSubMenu &&
                  <div className='navbar__mobile__sub__bg'>
                    <ArrowBackRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '130', left: '22vw', top: '9.75vh', position: 'absolute', color: '#fff'}} onClick={() => setShowSubMenu(!showSubMenu)} />
                    <CloseRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '130', right: '17.55vw', top: '9.75vh', position: 'absolute', color: '#fff'}} onClick={() => setShowMenu(!showMenu)} />
                    <ul className='navbar__mobile__sub__items'>
                      <li><a href="/cirugia-estetica/cirugia-facial">Cirugia Facial</a></li>
                      <li><a href="/cirugia-estetica/cirugia-corporal">Cirugia Corporal</a></li>
                      <li><a href="/cirugia-estetica/cirugia-mamaria">Cirugia Mamaria</a></li>
                      <li><a href="/cirugia-estetica/cirugia-if">Cirugia Íntima Femenina</a></li>
                    </ul>
                  </div>
                }    
              </li>

              <li onClick={() => setShowSubMenuME(!showSubMenuME)}>Medicina Estética
              {showSubMenuME &&
                  <div className='navbar__mobile__sub__bg'>
                    <ArrowBackRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '130', left: '22vw', top: '9.75vh', position: 'absolute', color: '#fff'}} onClick={() => setShowSubMenuME(!showSubMenuME)} />
                    <CloseRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '130', right: '17.55vw', top: '9.75vh', position: 'absolute', color: '#fff'}} onClick={() => setShowMenu(!showMenu)} />
                    <ul className='navbar__mobile__sub__items__me'>
                      <li>
                        <a href="/medicina-estetica/rejuvenecimiento-cara-cuello">
                          Rejuvenecimiento de cara y cuello
                        </a>
                      </li>
                      <li>
                        <a href="/medicina-estetica/mesoterapia-facial">
                          Mesoterapia facial
                        </a>
                      </li>
                      <li>
                        <a href="/medicina-estetica/peeling-quimico">
                          Peeling químico
                        </a>
                      </li>
                      <li>
                        <a href="/medicina-estetica/implantes-inyectables">
                          Implantes inyectables de relleno
                        </a>
                      </li>
                      <li>
                        <a href="/medicina-estetica/arrugas-expresion">
                          Arrugas de expresión
                        </a>
                      </li>
                      <li>
                        <a href="/medicina-estetica/hilos-tensores">
                          Hilos tensores
                        </a>
                      </li>
                    </ul>
                  </div>
                }
              </li>
              <li onClick={() => setShowSubMenuCR(!showSubMenuCR)}>Cirugía Reparadora
              {showSubMenuCR &&
                  <div className='navbar__mobile__sub__bg'>
                    <ArrowBackRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '130', left: '22vw', top: '9.75vh', position: 'absolute', color: '#000'}} onClick={() => setShowSubMenuCR(!showSubMenuCR)} />
                    <CloseRoundedIcon fontSize="large" style={{ cursor: 'pointer', zIndex: '130', right: '17.55vw', top: '9.75vh', position: 'absolute', color: '#000'}} onClick={() => setShowMenu(!showMenu)} />
                    <ul className='navbar__mobile__sub__items__cr'>
                      <li>
                        <a href="/cirugia-reparadora/cicatrices">
                          Cicatrices
                        </a>
                      </li>
                      <li>
                        <a href="/cirugia-reparadora/tumores">
                          Tumores
                        </a>
                      </li>
                      <li>
                        <a href="/cirugia-reparadora/reconstruccion-mama">
                          Reconstrucción de mama
                        </a>
                      </li>
                      <li>
                        <a href="/cirugia-reparadora/reconstruccion-oreja">
                          Reconstrucción de oreja
                        </a>
                      </li>
                    </ul>
                  </div>
                }
              </li>
              <li><a href="/galeria">Galería</a></li>
            </ul>
          </div>
        }
      </div>      
    </div>
  )
}

export default Navbar