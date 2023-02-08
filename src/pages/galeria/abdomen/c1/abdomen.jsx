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


function AumentoMamasC1(){
    return(
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='slide'>
                    <img src={All.AbdomenC1I1}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.AbdomenC1I2}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.AbdomenC1I3}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.AbdomenC1I4}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.AbdomenC1I5}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.AbdomenC1I6}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default AumentoMamasC1;