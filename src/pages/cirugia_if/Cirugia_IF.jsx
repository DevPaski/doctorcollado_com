import React from 'react';
import './cirugia_if.css';

import {
  LabiosMayores,
  LabiosMenores,
  Pubis,
  Clitoris
} from '../../containers';

import { FullPage, Slide } from 'react-full-page';

const Cirugia_IF = () => {
  return (
    <div>
      <FullPage>
        <Slide  id='Pubis' duration={1000}>
          <Pubis />
        </Slide>
        <Slide id='Labios-Mayores' duration={1000}>
          <LabiosMayores />
        </Slide>
        <Slide id='Labios-Menores' duration={1000}>
          <LabiosMenores />
        </Slide>
        <Slide id='Clitoris' duration={1000}>
          <Clitoris />
        </Slide>
      </FullPage>
    </div>
  )
}

export default Cirugia_IF