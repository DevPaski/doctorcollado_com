import React, {useState} from 'react';

// import ReactCompareImage from 'react-compare-image';
// <ReactCompareImage leftImage={All.AumentoMamasC1I1} rightImage={All.AumentoMamasC1I2}/>

import * as All from '../../../../assets/gallery';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../../swiperStyles.css';

import { Navigation } from "swiper";


function LabiosC2(){
    return(
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='slide'>
                    <img className='slide__img' src={All.LabiosC2I1}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img className='slide__img' src={All.LabiosC2I2}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.LabiosC2I3}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.LabiosC2I4}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.LabiosC2I5}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.LabiosC2I6}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default LabiosC2;