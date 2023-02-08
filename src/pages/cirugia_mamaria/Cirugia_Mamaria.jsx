import React from 'react';
import './cirugia_mamaria.css';

import {
  AumentoMamas,
  ElevacionMamas,
  ElevacionProtesis,
  ReduccionMamas,
  MamaTuberosa,
  Ginecomastia
} from '../../containers'

import { FullPage, Slide } from 'react-full-page';

const Cirugia_Mamaria = () => {
  return (
    <div>
      <FullPage>
        <Slide  id='Aumento-Mamas' duration={1000}>
          <AumentoMamas />
        </Slide>
        <Slide  id='Elevacion-Mamas' duration={1000}>
          <ElevacionMamas />
        </Slide>
        <Slide  id='Elevacion-Protesis' duration={1000}>
          <ElevacionProtesis />
        </Slide>
        <Slide  id='Reduccion-Mamas' duration={1000}>
          <ReduccionMamas />
        </Slide>
        <Slide  id='Mama-Tuberosa' duration={1000}>
          <MamaTuberosa />
        </Slide>
        <Slide  id='Ginecomastia' duration={1000}>
          <Ginecomastia />
        </Slide>
      </FullPage>
    </div>
  )
}

export default Cirugia_Mamaria