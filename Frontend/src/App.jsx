import React, { useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import FreelanceSection from './Components/FreelanceSection'
import Learning from './Components/Learning'
import Main from './Components/Main'
import NewsLetter from './Components/NewsLetter'
import Businesses from './Components/Business'
import Team from './Components/Team'
import BlogComponent from './Components/BlogComponent'
import Blogs from './Components/Blogs'
import ContactUs from './Components/ContactUs'
import { ToastContainer,Bounce } from 'react-toastify'

function App() {
  const BlogRef=React.createRef()
  const ContactRef=useRef();
  const ServiceRef=useRef();

  return (
    <>
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
     <div className='max-w-[100rem] 2xl:min-w-[100rem]  lg:pl-5 lg:pr-5    '>
        <Navbar ServiceRef={ServiceRef} ContactRef={ContactRef}  BlogRef={BlogRef}/>
        <div className=' flex justify-center  md:pl-0 md:pr-0'>
        <div  className='max-w-[85rem] items-center '>
        <Main/>
        <div ref={ServiceRef}>
        <FreelanceSection/>
        </div>
        <Learning/>
        <Businesses/>
        <NewsLetter/>
        <div ref={BlogRef}>
        <Blogs />
        </div>
        
        </div>
        </div>
        
     </div>
     <Team/>
     </div>
     <div ref={ContactRef}>
     <ContactUs />
     </div>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/>
    </>
  )
}

export default App
