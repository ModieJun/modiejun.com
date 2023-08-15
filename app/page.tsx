import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Home'
}

const Home = () => {
    return (
        <div className="min-h-screen max-w-screen-md mx-auto flex flex-col flex-grow justify-center">
            <div className="flex flex-row ">
                <h1>Johnson</h1>

            </div>

            <h3 className="text-gray-600">SubHeading</h3>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link className="flex w-full" prefetch={true} href="/blog">blog</Link>
                <div className="flex w-full">something</div>
                <div className="flex w-full">something</div>
                <div className="flex w-full">something</div>
            </div>
        </div>
    )
}

export default Home;