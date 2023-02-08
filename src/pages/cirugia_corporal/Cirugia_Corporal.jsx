import React from 'react';
import './cirugia_corporal.css';

import {
  DermoAbdominal,
  DermoBraquial,
  DermoCinturon,
  DermoCrural,
  ElevacionGluteos,
  AumentoGluteos,
  Liposuccion
} from '../../containers';

import { FullPage, Slide } from 'react-full-page';

const Cirugia_Corporal = () => {
  return (
    <div>
      <FullPage>
        <Slide  id='Dermolipectomia-Braquial' duration={1000}>
          <DermoBraquial />
        </Slide>
        <Slide  id='Dermolipectomia-Abdominal' duration={1000}>
          <DermoAbdominal />
        </Slide>
        <Slide  id='Dermolipectomia-Cinturon' duration={1000}>
          <DermoCinturon />
        </Slide>
        <Slide  id='Elevacion-Gluteos' duration={1000}>
          <ElevacionGluteos />
        </Slide>
        <Slide  id='Aumento-Gluteos' duration={1000}>
          <AumentoGluteos />
        </Slide>
        <Slide  id='Dermolipectomia-Crural' duration={1000}>
          <DermoCrural />
        </Slide>
        <Slide  id='Liposucción' duration={1000}>
          <Liposuccion />
        </Slide>
      </FullPage>
    </div>
  )
}

export default Cirugia_Corporal