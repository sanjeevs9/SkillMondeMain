import BlogComponent from "./BlogComponent";


export default function Blogs(){
    return(
        <>
        <div className="flex flex-col  justify-center gap-5 pb-1 md:pb-5 lg:gap-7">
            <div className="flex justify-center font-semibold text-2xl sm:text-3xl lg:pr-5 xl:pr-7 ">
                Blogs
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 gap-y-5 lg:gap-5">
                <BlogComponent title={"National Instructional Materials Accessibility Standards"} paragraph={"NIMAS Files in Educational Materials: A Comprehensive Guide The world of educational content has witnessed several transformati..."} link={"https://www.skillmonde.com/blog/nimas-conversion-services/"}/>
                <BlogComponent title={"Exploring The World Of Ebook Formats: From EPUB To Interactive EBooks"} paragraph={"In the digital age, the way we consume content has transformed dramatically. Traditional print books, while timeless, now share th..."} link={"https://www.skillmonde.com/blog/exploring-the-world-of-ebook-formats/"}/>
                <BlogComponent title={"Navigating The Frankfurt Book Fair: Your Gateway To Global Publishing Excellence"} paragraph={"The Frankfurt Book Fair: A Hub of Literary Excellence Every year, the literary world converges upon the bustling city of Frankf..."} link={"https://www.skillmonde.com/blog/navigating-the-frankfurt-book-fair-your-gateway-to-global-publishing-excellence/"}/>
                <BlogComponent title={"Why Hiring The Best Graphic Designer Is Crucial For Branding"} paragraph={"In today's digital age, as businesses search for 'graphic designers near me' or scout for the 'best graphic designer,' they are me..."} link={"https://www.skillmonde.com/blog/why-hiring-the-best-graphic-designer-is-crucial-for-branding/"}/>
            </div>
        </div>
        </>
    )
}