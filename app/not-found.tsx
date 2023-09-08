import Link from "next/link";

const NotFoundPage =()=>{
    return(
        <div className="max-w-screen-lg mx-auto flex flex-col min-h-screen justify-center">
            <div className="flex flex-col items-center gap-y-2">
                <p className="font-bold text-4xl">404 Page not Found</p>
                <Link href="/" prefetch={true} className="button">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage