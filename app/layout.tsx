type LayoutProps = {
    children: React.ReactNode,
};

import "../theme/global.css";

const Layout = ({
                    children
                }: LayoutProps) => {
    return (
        <html lang="en">
        <body>
            <div className="min-h-screen bg-gray-50">
                {/* header */}
                <div className="max-w-screen-lg mx-auto w-full flex py-4">
                    Navigation Bar
                </div>
                {/* Body */}
                <main
                    className="max-w-screen-lg py-8 mx-auto my-8 rounded-md outline-[1.5] outline-gray-300 outline p-4">{children}</main>
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