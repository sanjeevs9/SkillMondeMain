import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
        <Navbar/>
     </div>
    </>
  )
}

export default App
