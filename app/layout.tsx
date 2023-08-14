import React from "react";

type LayoutProps = {
    children: React.ReactNode,
};

import "../theme/global.css";
import Link from "next/link";

const Layout = ({
                    children
                }: LayoutProps) => {
    return (
        <html lang="en">
        <body>
            <div className="min-h-screen bg-gray-50">
                {/* header */}
                <div className="max-w-screen-lg mx-auto w-full flex py-4 justify-between">
                    <Link href="/">Home</Link>
                    <Link href="/about" prefetch={true}>About</Link>
                </div>
                {/* Body */}
                <main
                    className="">{children}</main>
                {/* Footer */}
                <div className="max-w-screen-lg w-full grid grid-cols-2 md:grid-cols-3 mx-auto">
                    Footer
                </div>
            </div>
        </body>
        </html>
    )
}

export default Layout;