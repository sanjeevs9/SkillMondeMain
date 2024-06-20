import study from "../../public/study.png";
import certificate from "../../public/certificate.png"
import reading from"../../public/reading-book.png"

export default function Learning(){
    return(
        <>
        <div>
            <div className="flex flex-col md:flex-row w-full p-5 gap-5 lg:gap-10  md:h-[25rem] lg:h-[28rem] xl:h-[31rem] ">
                <div className="md:w-2/4 md:min-h-full  h-[18rem]   md:relative ">
                    <img className="object-cover size-full rounded-xl h-full md:absolute md:right-0" src={study}></img>
                </div>
                <div className="w-full md:w-3/4 pl-5 md:pl-0">
                    <div className="md:font-semibold text-xl  sm:text-3xl lg:text-4xl xl:text-5xl  font-bold ">
                        <span className="text-PPurple ">Skillmonde: </span>
                        Elevate Your Learning
                    </div>
                    <div className="pt-1 text-sm sm:text-base lg:text-base xl:text-lg  font-semibold">Up Your Skill Effortlessly</div>
                    <div className="pt-3 text-sm sm:text-base lg:text-base xl:text-lg font-semibold w-5/6 md:w-3/4"> Register and browse courses, explore topics, or even book a consultation</div>
                    <div className="flex pt-5 font-semibold sm:text-lg lg:text-lg xl:text-xl items-center gap-1">
                        <img className="object-cover h-5 " src={certificate}></img>
                        <div className="">
                            Enroll in Courses and Learn from Experts
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm lg:text-sm xl:text-base pl-6">Learning doesn't have to be difficult. Enroll in a course or let us recommend one for you</div>
                    <div className="flex pt-3 sm:text-lg lg:text-lg xl:text-xl font-semibold items-center gap-1">
                        <img className="object-cover h-5" src={reading}></img>
                        <div>
                            Learn from the Best--Without Breaking the Bank
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm lg:text-sm xl:text-base pl-6">
                        Skillmonde makes it affordable to enhance your skills.
                    </div>
                    <div className="pl-6 pt-3 lg:pt-4 xl:pt-5 flex gap-4 sm:gap-7 lg:gap-7">
                        <button className="bg-PGreen p-2 pl-5 pr-5 sm:p-3 sm:pl-10 sm:pr-10  lg:p-[2.5] lg:pl-8 lg:pr-8 xl:p-3 xl:pl-10 xl:pr-10 rounded-lg text-sm font-medium transition ease-linear delay-150 hover:-translate-y-[0.5px] duration-300 hover:scale-105">Sign up</button>
                        <button className="border border-PGreen p-2 pl-5 pr-5 sm:p-3 sm:pl-10 sm:pr-10 lg:p-3 lg:pl-8 lg:pr-8  xl:p-3 xl:pl-10 xl:pr-10 rounded-lg font-medium text-sm transition ease-linear delay-150 hover:-translate-y-[0.5px] duration-300 hover:scale-105">Visit Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}