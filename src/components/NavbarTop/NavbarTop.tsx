import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { CgProfile } from "react-icons/cg";
import { FaGift } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import DropdownListItem from "../UI/DropdownListItem/DropdownListItem";

const NavbarTop = () => {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    return (
        <>
            <div className="border-b-[1px] border-b-slate-700">
                <div className="container grid sm:grid-cols-1 grid-cols-2">
                    <div className="text-white text-sm py-2 sm:hidden">
                        <Typewriter
                            options={{
                                strings: [
                                    "Welcome to Emarket !",
                                    " Wrap new offers / gift every single day on Weekends",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div>
                        <ul className="flex sm:justify-center justify-end space-x-3">
                            <li className="text-white hover:text-secondary transition ease-in-out delay-15 cursor-pointer text-center text-sm inline-flex items-center">
                                <FaGift className="mr-1" />
                                Gift Certificates
                            </li>

                            <li
                                onClick={() =>
                                    setToggleDropdown(!toggleDropdown)
                                }
                                className="text-white hover:text-secondary transition ease-in-out delay-15 py-2 cursor-pointer text-center inline-flex items-center relative"
                            >
                                <CgProfile className="mr-1" /> My Account{" "}
                                <AiFillCaretDown className="ml-1 mt-1" />
                                <ul
                                    className={`${
                                        toggleDropdown ? "" : "hidden"
                                    } z-10 w-44 absolute top-full -right-4 bg-white rounded-b-lg divide-y divide-gray-100 shadow dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200`}
                                >
                                    <DropdownListItem
                                        link="/profile"
                                        className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Profile
                                    </DropdownListItem>
                                    <DropdownListItem
                                        link="/wish-list"
                                        className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        WishList
                                    </DropdownListItem>
                                    <DropdownListItem
                                        link="/check-out"
                                        className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Check Out
                                    </DropdownListItem>
                                    <DropdownListItem
                                        link="/login"
                                        className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Login
                                    </DropdownListItem>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarTop;
