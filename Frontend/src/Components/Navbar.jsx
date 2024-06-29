const logo = "https://d502jbuhuh9wk.cloudfront.net/orgData/663c735c5b9b21433a1a933a/pages/assets/images/YjHkHsillmondelogobothversiontm1.png";
import React from "react";

export default function Navbar({ BlogRef, ContactRef, ServiceRef }) {
    return (
        <>
            <div>
                <div className="flex justify-between p-3 pl-5 pr-5  ">
                    <div className="flex justify-between gap-4 sm:gap-8 md:gap-10 lg:gap-16 items-center">
                        <div className="pt-[1px] ">
                            <img className="object-cover h-7 sm:h-10 md:h-12 lg:h-14" src={logo} />
                        </div>
                        <div className="font-ubuntu cursor-pointer text-xs sm:text-base relative  transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            Home
                        </div>
                        <div onClick={() => { ServiceRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="font-ubuntu cursor-pointer text-xs sm:text-base relative  transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            Sevices
                        </div>
                        <div onClick={() => { BlogRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="block cursor-pointer text-sm sm:text-base relative  transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            Blog
                        </div>
                        <div onClick={() => { ContactRef.current?.scrollIntoView({ behavior: "smooth" }) }} className="block cursor-pointer text-sm sm:text-base relative  transition-all before:transition-[width] ontransition-all before:duration-300 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] ontransition-all after:duration-300 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] " >
                            Contact Us
                        </div>
                        <div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

