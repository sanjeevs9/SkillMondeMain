import one from "../../public/1.png"
import two from "../../public/2.jpg"
import three from "../../public/3.png"

export default function Team() {
    return (
        <>
            <div className="flex justify-center overflow-x-hidden bg-red-400 pb-48 md:pb-[22rem] lg:pb-[32rem] ">
                <div className="w-full h-[5rem] md:h-[7rem] lg:h-[11rem] absolute -translate-y-10">
                    <div className="relative top-3/4 sm:top-3/4 md:top-3/4 justify-center flex items-center">
                        <div className="flex w-full xl:w-[85rem] h-full justify-between xl:justify-around pl-2 pr-2 md:pl-7 md:pr-7 lg:pl-10 lg:pr-10">
                            <div className="bg-[#dfb8b6] rounded-xl flex flex-col justify-center items-center h-[7rem] w-[7rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[17rem] lg:w-[17rem] xl:h-[18rem] xl:w-[18rem]">
                                <div className="rounded-full h-[6rem] w-[6rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem] absolute lg:static" style={{
                                    backgroundImage: `url(${one})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}></div>
                                <div className="hidden lg:flex lg:flex-col lg:pt-3">
                                    <div className="text-sm lg:font-medium text-center">Chander Ramchandani</div>
                                    <div className="flex text-xs justify-center">
                                        <svg className="size-fit w-5 hover:fill-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative lg:hidden -bottom-3/4 sm:-bottom-2/3">
                                    <div className="text-sm text-white text-center sm:text-base">Chander Ramchandani</div>
                                </div>
                            </div>

                            <div className="bg-[#dfb8b6] rounded-xl flex flex-col justify-center items-center h-[7rem] w-[7rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[17rem] lg:w-[17rem] xl:h-[18rem] xl:w-[18rem]">
                                <div className="rounded-full h-[6rem] w-[6rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem] absolute lg:static" style={{
                                    backgroundImage: `url(${two})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}></div>
                                <div className="hidden lg:flex lg:flex-col lg:pt-3">
                                    <div className="text-sm lg:font-medium text-center">Walt Niedner</div>
                                    <div className="flex text-xs justify-center">
                                        <svg className="size-fit w-5 hover:fill-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative lg:hidden -bottom-3/4 sm:-bottom-2/3">
                                    <div className="text-sm text-white sm:text-base">Walt Niedner</div>
                                </div>
                            </div>

                            <div className="bg-[#dfb8b6] rounded-xl flex flex-col justify-center items-center h-[7rem] w-[7rem] sm:h-[11rem] sm:w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[17rem] lg:w-[17rem] xl:h-[18rem] xl:w-[18rem]">
                                <div className="rounded-full h-[6rem] w-[6rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem] absolute lg:static" style={{
                                    backgroundImage: `url(${three})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}></div>
                                <div className="hidden lg:flex lg:flex-col lg:pt-3">
                                    <div className="text-sm lg:font-medium text-center">Gagan Josh</div>
                                    <div className="flex text-xs justify-center">
                                        <svg className="size-fit w-5 hover:fill-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative lg:hidden -bottom-3/4 sm:-bottom-2/3">
                                    <div className="text-sm text-white sm:text-base">Gagan Josh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[7rem] sm:h-[10rem] lg:h-[15rem] flex bg-PPurple justify-center items-end lg:pb-5 xl:pb-10">
                        <div className="hidden lg:flex text-white lg:text-4xl lg:font-semibold h-fit">
                            Our Team
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}