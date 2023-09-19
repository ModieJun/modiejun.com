import React from "react";
import "../../theme/global.css";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({
                    children
                }: LayoutProps) => {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    )
}

export default Layout;