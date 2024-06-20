import startup from "../../public/startup.png"

export default function Main(){
    return (
        <>
            <div className="">
                <div className="flex p-5 pt-0 md:pt-5">
                    <div>
                        <div className="flex flex-col p-5 sm:p-6 md:p-5  ">
                            <div className="font-bold text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant-gara">
                                Your Future Starts at <span className="text-PGreen">Skillmonde</span>
                            </div>
                            <div className="text-gray-500 font-semibold text-sm sm:text-lg md:text-sm lg:text-base xl:text-lg  w-4/5 pt-2 sm:pt-3 xl:pt-5">
                                Connecting Businesses, Freelancing and Learners fro a Brighter Future
                            </div>
                            <div className="pt-4 sm:pt-5 md:pt-6">
                                <button className="bg-PGreen text-xs sm:text-base font-medium rounded-lg p-2 pl-4 pr-4 sm:p-3 sm:pl-5 sm:pr-5  text-center">Explore more </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex  w-9/12  items-end  ">
                        <img className="size-fit w-[25rem] md:w-[30rem] lg:w-[40rem] xl:-translate-y-10" src={startup}/>
                    </div>
                </div>
            </div>
        </>
    )
}