import React from "react";
import NavBar from "../../components/nav/NavBar";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({
                    children
                }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* header */}
            <NavBar/>
            {/* Body */}
            <main className="max-w-screen-lg mx-auto">{children}</main>
            {/* Footer */}
            <div className="max-w-screen-lg w-full grid grid-cols-2 md:grid-cols-3 mx-auto">
                Footer
            </div>
        </div>
    )
}

export default Layout;