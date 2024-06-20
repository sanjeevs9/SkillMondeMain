import splash from "../../public/splash.jpg"

export default function NewsLetter(){
    return (
        <>
            <div className="md:pl-14 md:pr-14 xl:pl-16 xl:pr-16 p-5 ">
                
                <div style={{backgroundImage: `url(${splash})`,backgroundSize:'cover',backgroundPosition:"center" }} className=" rounded-3xl flex justify-center items-center p-5 md:p-8">
                    <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 ">
                        <div className="font-medium lg:font-semibold text-lg sm:text-2xl  ">Sign Up for our newsletter</div>
                        <div className="text-sm text-center lg:font-medium lg:pb-5">Hi there! get weekly update and be the first to know about our specials and promotions.</div>
                        <div className="w-3/4  bg-opacity-30 bg-red-100 shadow-lg flex justify-center rounded-full sm:p-1 lg:p-2 ">
                            <input className="border-none  bg-transparent placeholder:text-gray-700 text-gray-700 font-medium  p-2 focus:outline-none  w-10/12 text-sm" placeholder="Enter your Email"/>
                        </div> 
                        <div className="pt-3   ">
                            <button className="font-medium text-xs sm:text-sm  bg-white p-2 rounded-full pl-7 pr-7 sm:p-3 sm:pl-10 sm:pr-10">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}