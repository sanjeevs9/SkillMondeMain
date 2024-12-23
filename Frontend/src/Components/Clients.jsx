import one from "../../assets/logo/image 1.png"
import two from "../../assets/logo/image 2.png"
import three from "../../assets/logo/image 3.png"
import four from "../../assets/logo/image 4.png"
import five from "../../assets/logo/image 5.png"
import six from "../../assets/logo/image 6.png"
import seven from "../../assets/logo/image 7.png"
import eight from "../../assets/logo/image 8.png"
import nine from "../../assets/logo/image 9.png"
import ten from "../../assets/logo/image 10.png"
import eleven from "../../assets/logo/image 11.png"

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';


export default function Clients(){
    const [page,setpage]=useState(1); 


    useEffect(()=>{

        
    if(window.innerWidth>=850){
        setpage(3);
    }
    if(window.innerWidth<850){
        setpage(4);
    }
    if(window.innerWidth>1250){
        setpage(6);
    }
        const handle=()=>{
            if(window.innerWidth>=850){
                setpage(2);
            }
            if(window.innerWidth<850){
                setpage(1);
            }
            if(window.innerWidth>1250){
                setpage(3);
            }
            console.log(window.innerWidth)
        }
        window.addEventListener("resize",handle);

        return ()=>{
            window.removeEventListener("resize",handle)
        }
      
        
    },[window])

    return (
        <>
        <div className="pt-10">
          
            <Swiper 
            style={{
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-pagination-bullet-vertical-gap": "10px"
            }}
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{delay: 1500,disableOnInteraction: false}}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }} 
        modules={[Autoplay]}
        className="mySwiper bg-[#eeeeee] flex  pb-10 pt-10  "
      >
       
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={one}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={two}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={three}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={four}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={five}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={six}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={seven}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={eight}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={nine}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={ten}></img></div></SwiperSlide>
                <SwiperSlide  className=""><div className=" justify-center flex"><img className="object-contain  h-6 md:h-10 lg:h-16 xl:h-20" src={eleven}></img></div></SwiperSlide>

      </Swiper>
            </div>
        </>
    )
}