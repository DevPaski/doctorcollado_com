import React from 'react';

import { 
    Home,
    Cirugia_Estetica,
    Medicina_Estetica,
    Cirugia_Reparadora,
} from './containers';

import './Main.css';

import { FullPage, Slide } from 'react-full-page';

const App = () => {
    return (
        <div className='App'>
            <FullPage>
                <Slide id='Home' duration={1000} >
                    <Home />
                </Slide>
                
                <div name="cirugia-estetica" id='cirugia-estetica'></div>
                <Slide id='Cirugia_Estetica' duration={1000}>
                    <Cirugia_Estetica />
                </Slide>

                <div name="medicina-estetica" id='medicina-estetica'></div>
                <Slide id='Medicina_Estetica' duration={1000}>
                    <Medicina_Estetica />
                </Slide>
                
                <div name="cirugia-reparadora" id='cirugia-reparadora'></div>
                <Slide id='Cirugia_Reparadora' duration={1000}>
                    <Cirugia_Reparadora />
                </Slide>
            </FullPage>
        </div>
    )
}

export default App