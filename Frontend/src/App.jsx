import { useState } from 'react'
import Navbar from './Components/Navbar'
import FreelanceSection from './Components/FreelanceSection'
import Learning from './Components/Learning'
import Main from './Components/Main'
import NewsLetter from './Components/NewsLetter'
import Businesses from './Components/Business'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center'>
     <div className='max-w-[100rem] 2xl:min-w-[100rem]  lg:pl-5 lg:pr-5    '>
        <Navbar/>
        <div className=' flex justify-center  md:pl-0 md:pr-0'>
        <div className='max-w-[85rem] items-center '>
        <Main/>
        <FreelanceSection/>
        <Learning/>
        <Businesses/>
        <NewsLetter/>
        </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default App
