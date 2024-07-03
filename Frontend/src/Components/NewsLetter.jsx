import { useState } from "react"
import splash from "../../public/splash.jpg"
import { useEffect } from "react"
import axios from "axios"
import {useFormik} from "formik"


import * as Yup from 'yup';

// Define the validation schema
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  ipAddress:Yup.string()
});

export default function NewsLetter() {
    const[wait,setwait]=useState(false);
    const [ipAddress, setIPAddress] = useState('')

  useEffect(() => {
    async function ip(){
       await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data =>{{setIPAddress(data.ip)}} )
        .catch(error => console.log(error))
    }
    ip()
    
      
  }, []);

  const formik = useFormik({
    initialValues: { email: '',ipAddress:ipAddress },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        setwait(true)
        values.ipAddress=ipAddress
        await axios.post("http://localhost:3000/email", values)
        .then(res=>{
           alert("done")
        }).catch(err=>{
            alert("try again later")
        })
        setwait(false)
   
       
    },
  });

  return (
    <>
      <div className="md:pl-14 md:pr-14 xl:pl-16 xl:pr-16 p-5">
        <div style={{backgroundImage: `url(${splash})`, backgroundSize: 'cover', backgroundPosition: "center"}} className="rounded-3xl flex justify-center items-center p-5 md:p-8">
          <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center gap-3 sm:gap-4">
            <div className="font-medium lg:font-semibold text-lg sm:text-2xl">Sign Up for our newsletter</div>
            <div className="text-sm text-center lg:font-medium lg:pb-5">Hi there! Get weekly updates and be the first to know about our specials and promotions.</div>
            <div className="w-3/4 bg-opacity-30 bg-red-100 shadow-lg flex justify-center rounded-full sm:p-1 lg:p-2">
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="border-none bg-transparent placeholder:text-gray-700 text-gray-700 font-medium p-2 focus:outline-none w-10/12 text-sm"
                placeholder="Enter your Email"
              />
            </div>
            {formik.errors.email ? <div className="text-sm text-red-950">{formik.errors.email}</div> : null}
            <div className="pt-3">
              <button type="button" onClick={formik.handleSubmit} className="font-medium text-xs sm:text-sm bg-white p-2 rounded-full pl-7 pr-7 sm:p-3 sm:pl-10 sm:pr-10">{wait?"loading...":`Submit`}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}