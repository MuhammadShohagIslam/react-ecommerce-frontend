import React from "react";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
