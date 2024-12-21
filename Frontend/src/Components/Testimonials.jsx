import { useState, useEffect } from 'react';
import { User2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    quote: "The course developed by SkillMonde was exceptional and interactive. They expertly handled the complexity of our requirements, delivering content that was both comprehensive and accessible across a range of critical subjects. Their work on multilingual support and seamless LMS integration was key to the program’s success.",
    author: "Charu Kapoor, Country Director, NIIT Foundation."
  },
  {
    quote: "The NEP training provided by SkillMonde was exactly what our teachers needed. The sessions were engaging and informative, offering practical strategies our teachers could use immediately. We’ve already seen a positive impact in our classrooms, and our teachers are more motivated and better equipped to implement the NEP.",
    author: "Umesh Parihar, Program Director, Deepalaya Foundation"
  },
  {
    quote: "SkillMonde delivered an impactful training program that resonated with our students. Their approach to helping students assess their skills and explore career and entrepreneurial options was both engaging and effective. We’re grateful for their expertise and the positive impact this training has had on our students",
    author: "Roopali Mehra, CEO, MyTransform"
  },
  {
    quote: "“SkillMonde delivered exactly what we needed under very tight deadlines. Their ability to conceptualize, develop, and deliver high-quality interactive content for our BCA and MCA programs was outstanding. The courses are now a cornerstone of our online offerings, and we’ve received excellent feedback from our students.”",
    author: "GLA University"
  },
  {
    quote: "“SkillMonde’s outreach program was instrumental in expanding the reach of our textbooks. Their ability to manage a large-scale, multi-year campaign with such precision and effectiveness was impressive. The team they built and managed in the USA delivered outstanding results, helping us achieve our goal of reaching 20,000 professors.”",
    author: "OpenStax, Rice University"
  },
  {
    quote: "“SkillMonde did an outstanding job designing our school books. The complexity of the project was handled with incredible skill and attention to detail. The final designs were not only visually appealing but also educationally effective. We’re thrilled with the outcome and look forward to working with SkillMonde on future projects.”",
    author: "Scholars Learning USA"
  }
];

export default function TestimonialCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1220) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[20rem] sm:w-[25rem] md:w-[50rem] lg:w-[70rem] xl:w-full    px-2 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 tracking-tight">
          TESTIMONIAL
        </h2>

        <Swiper
        //   style={{
        //     "--swiper-pagination-bullet-horizontal-gap": "6px",
        //     "--swiper-pagination-bullet-vertical-gap": "10px"
        //   }}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          speed={1000}
        //   navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              
              <div className="px-2 flex justify-center items-center   pt-5  pb-10 ">
                <div
                     style={{ boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.3)' }}
                className="bg-white rounded-tr-2xl rounded-bl-2xl h-[25rem] sm:h-[25rem] md:h-[30rem]  lg:h-[30rem] lg:w-[25rem] shadow-lg p-4    flex flex-col ">
                  <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                    <div className="rounded-full bg-black p-2 sm:p-3 md:p-4">
                      <User2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <blockquote className="text-center mb-4 sm:mb-6 md:mb-8 flex-grow pt-5 sm:pt-0 lg:pt-10">
                    <p className="text-gray-600 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <footer className="text-center">
                    <p className="font-semibold text-sm sm:text-base md:text-base lg:text-lg">
                      - {testimonial.author}
                    </p>
                  </footer>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}