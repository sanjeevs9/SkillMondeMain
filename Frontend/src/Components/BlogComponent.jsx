
export default function BlogComponent({title,paragraph,link}){
    return(
        <>
            <div className="pl-5 pr-5 md:pb-5 ">
                <div className="flex flex-col  gap-3  rounded-3xl  md:max-w-[37rem]    border-gray-100 p-5"
                style={{ boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.3)' }}>
                    <div className="text-PPurple text-lg sm:text-xl md:text-lg lg:text-2xl   font-semibold">
                    {title}
                    </div>
                    <div className="text-sm sm:text-base md:text-sm lg:text-base line-clamp-2 sm:line-clamp-3 md:line-clamp-2">
                            {paragraph}
                    </div>
                    <div className="pt-3   ">
                            <button onClick={()=>{window.open(`${link}`)}}  className="font-medium text-xs sm:text-sm md:text-xs lg:text-sm bg-PGreen p-2 rounded-full pl-7 pr-7 sm:p-3 sm:pl-10 sm:pr-10">Learn more</button>
                        </div>
                </div>
            </div>
        </>
    )
}