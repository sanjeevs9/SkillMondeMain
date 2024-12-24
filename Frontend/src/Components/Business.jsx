import img from "../../public/business.png"

export default function Businesses(){
    return (
        <>
            <div className="pl-5 pr-5 pt-5 pb-5">
                <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10 h-auto   md:h-[25rem] lg:h-[26rem]  xl:h-[30rem] md:relative">
                    <div className="bg-[#ecf9df] flex p-2 w-full md:w-4/6 md:rounded-l-3xl ">
                        <div className=" w-full md:w-3/4  flex flex-col md:gap-4 gap-5 p-4 lg:p-6">
                            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                            Transform Your Training and Courses with SkillMonde
                            </div>
                            <div className="text-base md:text-base xl:text-xl  font-medium">
                            We specialize in custom training design, course development, and corporate learning.
                            </div>
                            <div className=" text-sm md:text-xs xl:text-base">
                            Custom eLearning Solutions <br/>
                            Interactive Training Modules <br/>
                            Advanced LMS Integration <br/>
                            Engaging Course Design
                            </div>
                            <div>
                            <button onClick={()=>{window.open("https://www.skillmonde.com/corporate")}} className=" bg-PGreen p-2 pl-5 pr-5 sm:p-3 sm:pl-10 sm:pr-10  lg:p-[2.5] lg:pl-8 lg:pr-8 xl:p-3 xl:pl-10 xl:pr-10 rounded-lg text-sm font-semibold transition ease-linear delay-150 hover:-translate-y-[0.5px] duration-300 hover:scale-105">Visit Now</button> 
                            </div>
                        </div>
                    </div>
                    <img className="hidden md:block md:absolute lg:-top-8 left-1/2 transform -translate-x-1/3 object-cover md:w-[25rem]  lg:w-[30rem] xl:w-[36rem] " src={img}/>
                    <div className="flex bg-PPurple w-full md:w-3/6 md:rounded-r-3xl items-end h-[24rem] md:h-auto relative md:static">
                        
                        <div className="text-white p-5 md:h-auto flex flex-col gap-5 ">
                            <div className=" bg-red-50 ">
                                <img className="md:hidden object-cover w-[25rem] sm:w-[27rem] absolute top-0 left-1/2 transform -translate-x-1/2" src={img}/>
                            </div>
                            <div className="font-semibold text-2xl sm:text-3xl md:text-2xl ">Features</div>
                            <div className="text-sm sm:text-base md:text-sm lg:text-base">
                                Browse Through a Diverse Pool of Professionals<br/>
                                Explore a Wode Range of Projects <br/>
                                Book One-on-One consultations with Experts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}