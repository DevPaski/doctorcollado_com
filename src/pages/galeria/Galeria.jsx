import React from 'react';
import './galeria.css';

import { Overlay, Logo, Navbar, NavbarFull, NavDotsGeneral } from '../../components';

import { FooterGallery } from './footer';

import { AumentoMamasC1, AumentoMamasC2, AumentoMamasC3 } from './aumento-mamas';
import { ComplicacionProtesis } from './complicacion-protesis';
import { ElevacionMamaC1, ElevacionMamaC2 } from './elevacion-mamas';
import { ElevacionProtesisC1, ElevacionProtesisC2 } from './elevacion-protesis';
import { ReduccionMamasC1, ReduccionMamasC2, ReduccionMamasC3 } from './reduccion-mamas';
import { AsimetriaMamas } from './asimetria-mamas';
import { TuberosasC1, TuberosasC2, TuberosasC3 } from './mamas-tuberosas';
import { GinecomastiaC1, GinecomastiaC2, GinecomastiaC3 } from './ginecomastia';
import { BrazosC1, BrazosC2 } from './brazos';
import { AbdomenC1, AbdomenC2, AbdomenC3 } from './abdomen';
import { AumentoGluteosC1 } from './aumento-gluteos';
import { LiposuccionC1, LiposuccionC2, LiposuccionC3, LiposuccionC4 } from './liposuccion';
import { NarizC1, NarizC2, NarizC3, NarizC4 } from './nariz';
import { OrejasC1, OrejasC2, OrejasC3, OrejasC4 } from './orejas';
import { RecMamaC1, RecMamaC2 } from './rec-mama';
import { LabiosC1, LabiosC2, LabiosC3 } from './labios';
import { 
        RecOrejaC1, RecOrejaC2, RecOrejaC3, RecOrejaC4,
        RecOrejaC5, RecOrejaC6, RecOrejaC7, RecOrejaC8,
        RecOrejaC9
      } from './rec-oreja';



const Galeria = () => {
  return (
    <div className='galeria'>
        <div className="overlay__gallery">
            <Logo />
            <Navbar />

            <div className='gallery__content'>
              <h2>Aumento de mamas</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <AumentoMamasC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <AumentoMamasC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <AumentoMamasC3 />                  
                </div>
              </div>

              <h2>Complicación prótesis</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <ComplicacionProtesis />
                </div>
                <div style={{gridColumn: 2, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Elevación de mamas</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <ElevacionMamaC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <ElevacionMamaC2 />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Elevación de mamas con prótesis</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <ElevacionProtesisC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <ElevacionProtesisC2 />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Reducción de mamas</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <ReduccionMamasC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <ReduccionMamasC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <ReduccionMamasC3 />
                </div>
              </div>

              <h2>Asimetria de mamas</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <AsimetriaMamas />
                </div>
                <div style={{gridColumn: 2, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Mamas tuberosas</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <TuberosasC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <TuberosasC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <TuberosasC3 />
                </div>
              </div>

              <h2>Ginecomastia</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <GinecomastiaC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <GinecomastiaC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <GinecomastiaC3 />
                </div>
              </div>

              <h2>Brazos</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <BrazosC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <BrazosC2 />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Abdomen</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <AbdomenC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <AbdomenC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <AbdomenC3 />
                </div>
              </div>

              <h2>Aumento de glúteos</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <AumentoGluteosC1 />
                </div>
                <div style={{gridColumn: 2, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Liposucción</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <LiposuccionC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <LiposuccionC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <LiposuccionC3 />
                </div>
                <div style={{gridColumn: 1, gridRow: 2}}>
                  <LiposuccionC4 />
                </div>
              </div>

              <h2>Nariz</h2>
              <div className='gallery__grid'>
              <div style={{gridColumn: 1}}>
                  <NarizC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <NarizC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <NarizC3 />
                </div>
                <div style={{gridColumn: 1, gridRow: 2}}>
                  <NarizC4 />
                </div>
              </div>

              <h2>Orejas</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <OrejasC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <OrejasC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <OrejasC3 />
                </div>
                <div style={{gridColumn: 1, gridRow: 2}}>
                  <OrejasC4 />
                </div>
              </div>

              <h2>Reconstrucción de mama</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <RecMamaC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <RecMamaC2 />
                </div>
                <div style={{gridColumn: 3, visibility:'hidden'}}>
                  <ComplicacionProtesis />
                </div>
              </div>

              <h2>Reconstrucción de oreja</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <RecOrejaC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <RecOrejaC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <RecOrejaC3 />
                </div>

                <div style={{gridRow: 2, gridColumn: 1}}>
                  <RecOrejaC4 />
                </div>
                <div style={{gridRow: 2, gridColumn: 2}}>
                  <RecOrejaC5 />
                </div>
                <div style={{gridRow: 2, gridColumn: 3}}>
                  <RecOrejaC6 />
                </div>

                <div style={{gridRow: 3, gridColumn: 1}}>
                  <RecOrejaC7 />
                </div>
                <div style={{gridRow: 3, gridColumn: 2}}>
                  <RecOrejaC8 />
                </div>
                <div style={{gridRow: 3, gridColumn: 3}}>
                  <RecOrejaC9 />
                </div>
              </div>

              <h2>Labios</h2>
              <div className='gallery__grid'>
                <div style={{gridColumn: 1}}>
                  <LabiosC1 />
                </div>
                <div style={{gridColumn: 2}}>
                  <LabiosC2 />
                </div>
                <div style={{gridColumn: 3}}>
                  <LabiosC3 />
                </div>
              </div>
            </div>

            <FooterGallery />
        </div>
    </div>
  )
}

export default Galeria