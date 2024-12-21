import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../index.css'

const OurServices = () => {
  const services = [
    {
      title: "Corporate Social Responsibility (CSR) Implementation",
      description: "SkillMonde partners with organizations to design and execute impactful CSR programs that align with corporate goals and deliver measurable social outcomes."
    },
    {
      title: "Voice Over Services for eLearning and Corporate Content",
      description: "We provide professional multilingual voice-over services for eLearning and corporate videos, enhancing communication with high-quality narration for instructional content."
    },
    {
        title: "Corporate Social Responsibility (CSR) Implementation",
        description: "SkillMonde partners with organizations to design and execute impactful CSR programs that align with corporate goals and deliver measurable social outcomes."
      },
      {
        title: "Voice Over Services for eLearning and Corporate Content",
        description: "We provide professional multilingual voice-over services for eLearning and corporate videos, enhancing communication with high-quality narration for instructional content."
      },
      {
        title: "Corporate Social Responsibility (CSR) Implementation",
        description: "SkillMonde partners with organizations to design and execute impactful CSR programs that align with corporate goals and deliver measurable social outcomes."
      },
      {
        title: "Voice Over Services for eLearning and Corporate Content",
        description: "We provide professional multilingual voice-over services for eLearning and corporate videos, enhancing communication with high-quality narration for instructional content."
      }
    // Add more services as needed
  ];

  return (
    <div className='flex justify-center items-center '>
    <div className="container  px-4 py-12 w-[23rem] md:min-w-full">
      <h2 className="text-3xl font-bold text-center mb-10">OUR SERVICES</h2>
      
      <Swiper
       
       style={{
        "--swiper-pagination-color": "#000000",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-pagination-bullet-vertical-gap": "10px",
        "--swiper-pagination-bottom": "-5px",
        "--swiper-pagination-top": "auto",
        "--swiper-pagination-bullet-z-index": "20", 
      }}
        modules={[ Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
    
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
            // Remove the 520 breakpoint since we want default (1) below 640px
          
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        className="mySwiper pb-5"
      >
        {services.map((service, index) => (
          <SwiperSlide className='flex justify-center items-center w-[5rem]  p-1 ' key={index}>
            <div
            style={{ boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.3)' }}
            className="flex flex-col items-center   bg-white rounded-lg shadow-xl p-6 md:w-[30rem] h-[15rem] ">
              <h3 className="text-base md:text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm md:text-base text-black pt-6">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default OurServices;