import React from 'react';
import './cirugia_facial.css';

import {
  Blefaroplastia,
  Otoplastia,
  Lifting,
  Rinoplastia,
  Remodelado_Labios,
  Aumento_Pomulos,
  Aumento_Menton
} from '../../containers'

import { FullPage, Slide } from 'react-full-page';

const Cirugia_Facial = () => {
  return (
    <div>
      <FullPage>
        <Slide  id='Blefaroplastia' duration={1000}>
          <Blefaroplastia />
        </Slide>
        <Slide  id='Rinoplastia' duration={1000}>
          <Rinoplastia />
        </Slide>
        <Slide  id='Otoplastia' duration={1000}>
          <Otoplastia />
        </Slide>
        <Slide  id='Aumento-Pomulos' duration={1000}>
          <Aumento_Pomulos />
        </Slide>
        <Slide  id='Remodelado-Labios' duration={1000}>
          <Remodelado_Labios />
        </Slide>
        <Slide  id='Aumento-Menton' duration={1000}>
          <Aumento_Menton />
        </Slide>
        <Slide  id='Lifting' duration={1000}>
          <Lifting />
        </Slide>
      </FullPage>
    </div>
  )
}

export default Cirugia_Facial