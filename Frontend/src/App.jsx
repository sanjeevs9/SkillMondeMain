import { useState } from 'react'
import Navbar from './Components/Navbar'
import FreelanceSection from './Components/FreelanceSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
        <Navbar/>
        <FreelanceSection/>
     </div>
    </>
  )
}

export default App
