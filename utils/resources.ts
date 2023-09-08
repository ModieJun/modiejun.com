export const RESUME_URL =
    "https://modiejun-prd-public.s3.ap-east-1.amazonaws.com/lin_junjie_resume_eng.pdf";

// Article
export type ArticleResponse = {
    status: string;
    totalResults: number;
    articles: Article[];
};
export type Article = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`

export const fetchNews = async (q:string,pageSize?: number): Promise<ArticleResponse> => {
    let url = BASE_URL + `&q=${q}`
    if (pageSize) {
        url += `&pageSize=${pageSize}`
    }
    try{
        const result = await fetch(url);
        return result.json().then(body => body as ArticleResponse);
    }catch (err) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
}