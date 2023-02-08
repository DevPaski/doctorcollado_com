import React, {useState} from 'react';

import * as All from '../../../../assets/gallery';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../../swiperStyles.css';

import { Navigation } from "swiper";


function BrazosC2(){
    return(
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='slide'>
                    <img style={{objectFit: 'cover'}} src={All.BrazosC2I1}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img className='slide__img' src={All.BrazosC2I2}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.BrazosC2I3}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.BrazosC2I4}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.BrazosC2I5}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.BrazosC2I6}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.BrazosC2I7}/>
                    <div className='caption'>
                        <h4>Antes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={All.BrazosC2I8}/>
                    <div className='caption'>
                        <h4>Después</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default BrazosC2;