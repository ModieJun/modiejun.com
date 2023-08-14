import React from "react";
import "../theme/global.css";
import NavBar from "../components/nav/NavBar";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({
                    children
                }: LayoutProps) => {
    return (
        <html lang="en">
        <body>
        <div className="min-h-screen bg-gray-50">
            {/* header */}
            <NavBar/>
            {/* Body */}
            <main>{children}</main>
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