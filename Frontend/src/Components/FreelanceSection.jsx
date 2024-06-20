import work from "../../public/work.jpg"

export default function FreelanceSection(){
    return(
        <>
        <div className=" md:pt-10 ">
                <div className="flex p-5 xl:h-[36rem] h-[30rem] sm:h-[40rem]  md:h-[30rem]  md:flex-row flex-col-reverse ">
                    <div className="bg-[#125045] md:w-3/6 w-full md:rounded-l-2xl  md:h-auto h-full">
                            <div className="text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl  text-white font-semibold p-6 md:p-10  lg:p-14 h-5/6  md:h-auto ">
                                <div>
                                Start ‎ 
                                <span className="text-PGreen">Freelancing</span>:
                                </div>
                                <div className="text-sm sm:text-lg md:text-base xl:text-xl font-normal pt-2">Begin your freelance journey now.</div>
                                <div className="pt-8 xl:pt-12">Hire Top ‎ 
                                    <span className="text-PGreen">Freelancers</span>:
                                </div>
                                <div className="text-sm sm:text-lg md:text-base font-normal xl:text-xl pt-2 pb-5 md:pb-7">Get your work done by the best freelancers</div>
                                <button className="bg-white text-black text-xs sm:text-base xl:text-base rounded-lg p-2 pl-3 pr-3 sm:p-4 sm:pl-8 sm:pr-8   md:p-3 md:pl-7 md:pr-7 transition ease-in-out delay-150 hover:-translate-y-[0.5px] duration-300 hover:scale-110">Visit Now</button>
                            </div>
                    </div>
                    <div className="md:w-4/6 w-full  h-2/6 sm:h-2/6 md:h-auto  flex ">
                        <img className="size-full  object-cover  md:rounded-r-2xl" src={work}></img>
                    </div>
                </div>
        </div>
        </>
    )
}