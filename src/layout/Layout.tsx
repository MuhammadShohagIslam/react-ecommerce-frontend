import React from "react";
import Navbar from "../components/Navbar/Navbar";

const main = ({ children }: React.PropsWithChildren): JSX.Element => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default main;
