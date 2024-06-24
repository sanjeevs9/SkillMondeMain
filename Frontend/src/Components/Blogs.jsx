import BlogComponent from "./BlogComponent";


export default function Blogs(){
    return(
        <>
        <div className="flex flex-col  justify-center gap-5 pb-1 md:pb-5 lg:gap-7">
            <div className="flex justify-center font-semibold text-2xl sm:text-3xl lg:pr-5 xl:pr-7">
                Blogs
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 gap-y-5 lg:gap-5">
                <BlogComponent/>
                <BlogComponent/>
                <BlogComponent/>
                <BlogComponent/>
            </div>
        </div>
        </>
    )
}