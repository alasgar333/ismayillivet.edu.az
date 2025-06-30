import React, {useEffect, useRef, useState, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/autoplay';
import '../slider.css'


import anime from 'animejs/lib/anime.es.js';

// import required modules
import {Pagination, Navigation, Autoplay } from 'swiper/modules';

function  Slider() {

  useEffect(()=>{
    const animateImage= ()=>{
      anime({
        targets: '.sliderchild',
        translateX:  ['0%', '25%'],
        translateY:  ['5%', '15%'],
        duration: 4000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };

    const animateImage2= ()=>{
      anime({
        targets: '.sliderbg',
        scale:  [1, 1.3],
        duration: 8000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };

    animateImage();
    animateImage2();
  },[]);

  return (
  
    
  <div>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}

        loop={true}
        modules={[Pagination, Navigation, ]}
       
        
        pagination={{
          clickable: true,
        }}
        

        navigation={true}
        
        className="mySwiper"
      >
        <SwiperSlide>
         
         <section className='relative h-full overflow-hidden '>
          <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg ' style={{backgroundImage:'url("img/klublar.jpg")'}}>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-primary'></div>
          
          <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
            <div className='lg:w-1/2'><h2 className=' text-3xl lg:text-6xl font-poppins font-semibold text-white'>Lorem, ipsum </h2>
            
            <p className='text-white mt-1 lg:mt-5'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, dignissimos.</p>
            </div>
            
            <div className='lg:w-1/2'>
              <img src='img/nulll1000x700.png' alt="1280x720"  className='w-full h-auto sliderchild'/>
            </div>
          </div>
         </section>
        </SwiperSlide>

        <SwiperSlide>
         
         <section className='relative h-full overflow-hidden '>
          <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg ' style={{backgroundImage:'url("img/1.jpg")'}}>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-primary'></div>
          
          <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
            <div className='lg:w-1/2'><h2 className=' text-3xl lg:text-6xl font-poppins font-semibold text-white'>Lorem, ipsum </h2>
            
            <p className='text-white mt-1 lg:mt-5'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, dignissimos.</p>
            </div>
            
            <div className='lg:w-1/2'>
              <img src='img/kenan_harun1.png' alt="1280x720"  className='w-full h-auto sliderchild'/>
            </div>
          </div>
         </section>
        </SwiperSlide>
        <SwiperSlide>
         
         <section className='relative h-full overflow-hidden '>
          <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{backgroundImage:'url("img/1.jpg")'}}>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-primary'></div>
          
          <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
            <div className='lg:w-1/2'><h2 className=' text-3xl lg:text-6xl font-poppins font-semibold text-white'>Lorem, ipsum </h2>
            
            <p className='text-white mt-1 lg:mt-5'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, dignissimos.</p>
            </div>
            
            <div className='lg:w-1/2'>
              <img src='img/Cavad_Elmir1.png' alt=""  className='w-full h-auto sliderchild'/>
            </div>
          </div>
         </section>
        </SwiperSlide>
        <SwiperSlide>
         
         <section className='relative h-full overflow-hidden '>
          <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{backgroundImage:'url("img/1.jpeg")'}}>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-primary'></div>
          
          <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
            <div className='lg:w-1/2'><h2 className=' text-3xl lg:text-6xl font-poppins font-semibold text-white'>Lorem, ipsum </h2>
            
            <p className='text-white mt-1 lg:mt-5'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, dignissimos.</p>
            </div>
            
            <div className='lg:w-1/2'>
              <img src='img/5.png' alt=""  className='w-full h-auto sliderchild'/>
            </div>
          </div>
         </section>
        </SwiperSlide>

        <SwiperSlide>
         
         <section className='relative h-full overflow-hidden '>
          <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{backgroundImage:'url("img/1.jpg")'}}>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-primary'></div>
          
          <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
            <div className='lg:w-1/2'><h2 className=' text-3xl lg:text-6xl font-poppins font-semibold text-white'>Lorem, ipsum </h2>
            
            <p className='text-white mt-1 lg:mt-5'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, dignissimos.</p>
            </div>
            
            <div className='lg:w-1/2'>
              <img src='img/5.png' alt=""  className='w-full h-auto slideranime sliderchild'/>
            </div>
          </div>
         </section>
        </SwiperSlide>
       
      </Swiper>
  </div>
  )
}

export default Slider
