import React from "react";
import NavbarMiddle from "../components/NavbarMiddle/NavbarMiddle";
import NavbarTop from "../components/NavbarTop/NavbarTop";

const main = ({ children }: React.PropsWithChildren): JSX.Element => {
    return (
        <>
            <header className="bg-primary">
                <NavbarTop />
                <NavbarMiddle/>
            </header>
            <main>{children}</main>
        </>
    );
};

export default main;
