import React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { 
    Home,
    Cirugia_Estetica,
    Medicina_Estetica,
    Cirugia_Reparadora,
} from './containers';

import {
    Politicas,
    AvisoLegal,
    Cookies,
    Cirugia_Facial,
    Cirugia_Mamaria,
    Cirugia_Corporal,
    Cirugia_IF,

    InfoBlefaroplastia,
    InfoRinoplastia,
    InfoOtoplastia,
    InfoAumento_Pomulos,
    InfoRemodelado_Labios,
    InfoAumento_Menton,
    InfoLifting,

    InfoDBraquial,
    InfoDAbdominal,
    InfoDCinturon,
    InfoEGluteos,
    InfoAGluteos,
    InfoDCural,
    InfoLipo,

    InfoArrugas,
    InfoHilos,
    InfoImplantes,
    InfoMesoterapia,
    InfoPeeling,
    InfoRejuvenicimiento,

    InfoAumento_Mamas,
    InfoElevacion_Mama,
    InfoElevacion_Protesis,
    InfoReduccion_Mama,
    InfoMama_Tuberosa,
    InfoGinecomastia,

    InfoClitoris,
    InfoLabiosMayores,
    InfoLabiosMenores,
    InfoPubis,

    InfoCicatriz,
    InfoRMama,
    InfoROreja,
    InfoTumores,

    Contacto,
    Galeria
} from './pages';

import {
    Nosotros
} from './containers';

import Main from './Main';
import './index.css';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<Main />} />

            {/* IDs Subpages */}
            <Route path='/#cirugia-estetica' element={<Cirugia_Estetica />} />
            <Route path='/#medicina-estetica' element={<Medicina_Estetica />} />
            <Route path='/#cirugia-reparadora' element={<Cirugia_Reparadora />} />
            
            {/* Rutas del footer */}
            <Route path='/politica-privacidad' element={<Politicas />} />
            <Route path='/aviso-legal' element={<AvisoLegal />} />
            <Route path='/cookies' element={<Cookies />} />

            <Route path='/nosotros' element={<Nosotros />} />

            {/* Rutas de cirugia estetica */}
            <Route path='/cirugia-estetica/cirugia-facial' element={<Cirugia_Facial />} />
            <Route path='/cirugia-estetica/cirugia-mamaria' element={<Cirugia_Mamaria />} />
            <Route path='/cirugia-estetica/cirugia-corporal' element={<Cirugia_Corporal />} />
            <Route path='/cirugia-estetica/cirugia-if' element={<Cirugia_IF />} />

                {/* Rutas de Cirugia Facial */}
                <Route path='/cirugia-estetica/cirugia-facial/blefaroplastia' element={<InfoBlefaroplastia />}/>
                <Route path='/cirugia-estetica/cirugia-facial/rinoplastia' element={<InfoRinoplastia />}/>
                <Route path='/cirugia-estetica/cirugia-facial/otoplastia' element={<InfoOtoplastia />}/>
                <Route path='/cirugia-estetica/cirugia-facial/aumento-pomulos' element={<InfoAumento_Pomulos />}/>
                <Route path='/cirugia-estetica/cirugia-facial/remodelado-labios' element={<InfoRemodelado_Labios />}/>
                <Route path='/cirugia-estetica/cirugia-facial/aumento-menton' element={<InfoAumento_Menton />}/>
                <Route path='/cirugia-estetica/cirugia-facial/lifting' element={<InfoLifting />}/>
                
                {/* Rutas de Cirugia Mamaria */}
                <Route path='/cirugia-estetica/cirugia-mamaria/aumento-mamas' element={<InfoAumento_Mamas />}/>
                <Route path='/cirugia-estetica/cirugia-mamaria/elevacion-mamas' element={<InfoElevacion_Mama />}/>
                <Route path='/cirugia-estetica/cirugia-mamaria/elevacion-mamas-protesis' element={<InfoElevacion_Protesis />}/>
                <Route path='/cirugia-estetica/cirugia-mamaria/reduccion-mamas' element={<InfoReduccion_Mama />}/>
                <Route path='/cirugia-estetica/cirugia-mamaria/mamas-tuberosas' element={<InfoMama_Tuberosa />}/>
                <Route path='/cirugia-estetica/cirugia-mamaria/ginecomastia' element={<InfoGinecomastia />}/>

                {/* Rutas de Cirugia Corporal */}
                <Route path='/cirugia-estetica/cirugia-corporal/dermolipectomia-braquial' element={<InfoDBraquial />}/>
                <Route path='/cirugia-estetica/cirugia-corporal/dermolipectomia-abdominal' element={<InfoDAbdominal />}/>
                <Route path='/cirugia-estetica/cirugia-corporal/dermolipectomia-cinturon' element={<InfoDCinturon />}/>
                <Route path='/cirugia-estetica/cirugia-corporal/elevacion-gluteos' element={<InfoEGluteos />}/>
                <Route path='/cirugia-estetica/cirugia-corporal/aumento-gluteos' element={<InfoAGluteos />}/>
                <Route path='/cirugia-estetica/cirugia-corporal/dermolipectomia-crural' element={<InfoDCural />}/>
                <Route path='/cirugia-estetica/cirugia-corporal/liposuccion' element={<InfoLipo />}/>

                {/* Rutas de Cirugia Intima Femenina */}
                <Route path='/cirugia-estetica/cirugia-if/pubis' element={<InfoPubis />}/>
                <Route path='/cirugia-estetica/cirugia-if/labios-mayores' element={<InfoLabiosMayores />}/>
                <Route path='/cirugia-estetica/cirugia-if/labios-menores' element={<InfoLabiosMenores />}/>
                <Route path='/cirugia-estetica/cirugia-if/clitoris' element={<InfoClitoris />}/>


            {/* Rutas de Medicina Estetica */}
            <Route path='/medicina-estetica/rejuvenecimiento-cara-cuello' element={<InfoRejuvenicimiento />}/>
            <Route path='/medicina-estetica/mesoterapia-facial' element={<InfoMesoterapia />}/>
            <Route path='/medicina-estetica/implantes-inyectables' element={<InfoImplantes />}/>
            <Route path='/medicina-estetica/peeling-quimico' element={<InfoPeeling />}/>
            <Route path='/medicina-estetica/arrugas-expresion' element={<InfoArrugas />}/>
            <Route path='/medicina-estetica/hilos-tensores' element={<InfoHilos />}/>

            {/* Rutas de Cirugia Reparadora */}
            <Route path='/cirugia-reparadora/cicatrices' element={<InfoCicatriz />}/>
            <Route path='/cirugia-reparadora/tumores' element={<InfoTumores />}/>
            <Route path='/cirugia-reparadora/reconstruccion-mama' element={<InfoRMama />}/>
            <Route path='/cirugia-reparadora/reconstruccion-oreja' element={<InfoROreja />}/>

            <Route path='/contacto' element={<Contacto />} />
            <Route path='/galeria' element={<Galeria />} />
        </Routes>
    </Router>,

    document.getElementById('root')
);