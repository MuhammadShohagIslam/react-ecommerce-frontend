import React from "react";
import NavbarBottom from "../components/NavbarBottom/NavbarBottom";
import NavbarMiddle from "../components/NavbarMiddle/NavbarMiddle";
import NavbarTop from "../components/NavbarTop/NavbarTop";

const main = ({ children }: React.PropsWithChildren): JSX.Element => {
    return (
        <>
            <header className="bg-primary">
                <NavbarTop />
                <NavbarMiddle/>
                <NavbarBottom/>
            </header>
            <main>{children}</main>
        </>
    );
};

export default main;
