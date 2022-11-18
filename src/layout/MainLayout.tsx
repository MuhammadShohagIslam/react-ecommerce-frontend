import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default MainLayout;
