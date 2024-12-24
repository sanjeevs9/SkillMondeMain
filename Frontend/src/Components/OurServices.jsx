import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../index.css'

const OurServices = () => {
  const services = [
    {
      title: "Content Development for K-12, Higher Education, and Professional Skills",
      description: "Your trusted content development vendor for K-12 curriculum, higher education course materials, and professional skills training. We create engaging, interactive content aligned with curriculum standards for schools, universities, and corporate training programs."
    },
    {
      title: "eLearning and Storyboarding Solutions",
      description: "We offer custom eLearning solutions, developing interactive modules with videos, quizzes, and simulations. Our instructional designers create SCORM-compliant storyboards for seamless LMS integration and effective digital learning experiences."
    },
    {
      title: "Complete Course Writing and Development for Distance Learning",
      description: "We specialize in online course development for distance learning universities, delivering comprehensive, multimedia-rich content for Bachelor's, Master's, and blended learning programs."
    },
    {
      title: "Comprehensive Publishing Services",
      description: "SkillMonde offers comprehensive publishing services for educational institutions, including professional copyediting, proofreading, typesetting, and eBook production for accessible and polished content."
    },
    {
      title: "Customized Services for NGOs",
      description: "We provide eLearning and content development solutions for NGOs, including vocational training, literacy programs, and CSR initiatives. Our LMS customization ensures your learning platforms."
    },
    {
      title: "Video Production and Editing for Educational and Corporate Training",
      description: "SkillMonde delivers video production and editing services for educational and corporate training programs, creating engaging instructional and explainer videos to enhance knowledge retention."
    },
    {
      title: "Animation Services for Interactive Learning",
      description: "We offer 2D and 3D animation services to create dynamic learning content for eLearning and corporate training programs, simplifying complex ideas and boosting learner engagement."
    },
    {
      title: "Translation and Localization Services",
      description: "Our translation and localization services adapt educational, corporate, and NGO content for global audiences, ensuring compliance with local standards and cultural relevance."
    },
    {
      title: "Voice Over Services for eLearning and Corporate Content",
      description: "We provide professional multilingual voice-over services for eLearning and corporate videos, enhancing communication with high-quality narration for instructional content."
    },
    {
      title: "Instructional Design and eLearning Module Development",
      description: "Our instructional design experts create custom eLearning modules that are interactive and aligned with learning objectives, using multimedia elements for engaging learning experiences."
    },
    {
      title: "Corporate Social Responsibility (CSR) Implementation",
      description: "SkillMonde partners with organizations to design and execute impactful CSR programs that align with corporate goals and deliver measurable social outcomes."
    },
    {
      title: "LMS Solutions for Educational, Corporate, and NGO Programs",
      description: "We offer custom LMS solutions for schools, universities, corporate training, and NGOs, ensuring seamless integration with SCORM and xAPI compliance for diverse learning needs."
    }
  ];

  return (
    <div className='flex justify-center items-center '>
    <div className="container  px-4  w-[23rem] md:min-w-full">
      <h2 className="text-3xl font-bold text-center mb-10">OUR SERVICES</h2>
      
      <Swiper
       
       style={{
        "--swiper-pagination-color": "#000000",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "5px",
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
          delay: 1000000,
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
            className="flex flex-col items-center   bg-white rounded-lg shadow-xl p-6 md:w-[30rem] h-[16rem] lg:h-[18rem] ">
              <div className='flex flex-col items-start justify-start '>
              <h3 className=" flex text-base md:text-xl font-semibold md:mb-4 text-center  ">{service.title}</h3>
              </div>
              <p className="text-sm md:text-base text-black pt-3 sm:pt-5">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default OurServices;