import React from "react";
import NavbarMiddle from "./NavbarMiddle/NavbarMiddle";
import NavbarTop from "./NavbarTop/NavbarTop";

const Navbar = () => {
    return (
        <header className="bg-header">
            <NavbarTop/>
            <NavbarMiddle/>
        </header>
    );
};

export default Navbar;
