'use client'
import {useRouter} from "next/navigation";
import {Article} from "../utils/resources";
import React from "react";
import Image from "next/image";

type BlogContentProps = {
    article: Article
}

export const BlogContent = (props:BlogContentProps) => {
    const router = useRouter();

    return (
        <div className="text-lg pb-4 rounded border-gray-300 border-[0.5px] cursor-pointer" key={props.article.source.id} onClick={()=>{
            router.push(props.article.url)
        }}>
            <img src={props.article.urlToImage} alt={props.article.description} className="w-full h-auto rounded-t "/>
            <h1>{props.article.title}</h1>
            <p className="text-opacity-80 italic text-sm">{props.article.author}</p>
        </div>
    )
}

