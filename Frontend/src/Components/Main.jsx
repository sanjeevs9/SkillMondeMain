import startup from "../../public/startup.png"

export default function Main(){
    return (
        <>
            <div className="">
                <div className="flex p-5 pb-1 pt-0 md:pt-5 md:pb-0 xl:pt-10">
                    <div className="xl:translate-y-4">
                        <div className="flex flex-col p-5 sm:p-6 md:p-5 md:pt-7 ">
                            <div className="font-bold text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant-gara">
                            Your Trusted Vendor for Content Development and Skill Building 
                            </div>
                            <div className="text-gray-500 font-semibold text-sm sm:text-lg md:text-sm lg:text-base xl:text-lg  w-4/5 pt-2 sm:pt-3 xl:pt-5">
                            Expert Services in eLearning, Training, Publishing, and Multimedia
                            </div>
                            <div className="pt-4 sm:pt-5 md:pt-6">
                                <button onClick={()=>{window.open("https://skillmonde.com")}} className="bg-PGreen text-xs sm:text-base font-medium rounded-lg p-2 pl-4 pr-4 sm:p-3 sm:pl-5 sm:pr-5  text-center hover:bg-[#125045] hover:text-white">Book Your Free Consultation </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex  w-9/12  items-end  ">
                        <img className="object-cover w-[25rem] md:w-[30rem] lg:w-[40rem] lg:-translate-y-5 xl:-translate-y-10" src={startup}/>
                    </div>
                </div>
            </div>
        </>
    )
}

// Your Trusted Vendor for Content Development and Skill Building
// Subtitle- Expert Services in eLearning, Training, Publishing, and Multimedia