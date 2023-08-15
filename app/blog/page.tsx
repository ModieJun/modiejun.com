import {fetchNews} from "../../utils/resources";
import {BlogContent} from "../../components/blogcontent";

const Blog = async () => {
    const news = await getData();
    return (
        <div className="flex flex-col sm:flex-row sm:space-x-16">
            <div className="flex flex-1 flex-col overflow-auto py-4 ">
                <h1 className="text-2xl">Blog</h1>
                <div className="flex flex-col space-y-8 ">
                    {news.articles.map((ele, i) => {
                        return (
                            <BlogContent article={ele} key={i}/>
                        )
                    })}
                </div>
            </div>
            <div className="sticky top-0 right-0 h-1/2 w-full sm:w-1/4 py-4">
                <p className="font-bold">Subscribe</p>
                <div className="flex flex-col my-2 gap-y-2">
                    <input type="email"
                           className=" max-w-md py-3 px-4 block w-full border-gray-300 border-[1px] rounded-md text-sm  focus:border-blue-500 focus:ring-blue-500 "/>
                    <button type="button"
                            className="max-w-md w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

async function getData() {
    return await fetchNews("us", 10);
}

export default Blog;