'use client'
import {ArticleResponse, fetchNews} from "../../utils/resources";
import {BlogContent} from "../../components/blogcontent";
import {useEffect, useState} from "react";
import {debounceTime, Subject} from "rxjs";
import {promise} from "zod";

const Blog = () => {

    const [news, setNews] = useState<ArticleResponse | undefined>(undefined);
    const [searchQuery$] = useState(new Subject<string>());

    useEffect(() => {
        searchQuery$.pipe(debounceTime(500)).subscribe(async ele => {
            setNews(await getData(ele));
        });
    }, [searchQuery$])
    return (
        <div className="flex flex-col w-full sm:flex-row sm:space-x-16">
            <div className="flex flex-grow flex-col overflow-auto py-4 gap-y-2">
                <h1 className="text-2xl">Blog</h1>
                <input type="search" onChange={(e) => {
                    searchQuery$.next(e.target.value)
                }}/>
                <div className="flex flex-col space-y-8 ">
                    {news && news.articles && news.articles.map((ele, i) => {
                        return (
                            <BlogContent article={ele} key={i}/>
                        )
                    })}
                </div>
            </div>
            <div className="sticky top-0 right-0 h-1/2 w-full sm:w-1/4 py-4">
                <p className="font-bold">Subscribe</p>
                <div className="flex flex-col my-2 gap-y-2">
                    <input type="email"/>
                    <button type="button"
                            className="max-w-md w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

async function getData(query: string) {
    if (query == '') {
        return new Promise<ArticleResponse>((resolve) => {
            resolve({articles: [], status: 'empty', totalResults: 0})
        })
    }
    return await fetchNews(query, 10);
}

export default Blog;