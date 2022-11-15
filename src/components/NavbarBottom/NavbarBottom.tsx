import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import DropdownListItem from "../UI/DropdownListItem/DropdownListItem";

const NavbarBottom = () => {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    return (
        <div className="container grid grid-cols-3 pt-2">
            <div>
                <ul className="flex justify-start">
                    <li
                        onMouseEnter={() => setToggleDropdown(!toggleDropdown)}
                        onMouseLeave={() => setToggleDropdown(!toggleDropdown)}
                        className="text-white border-2 border-transparent hover:border-secondary hover:bg-transparent bg-secondary hover:text-secondary transition ease-in-out delay-25 px-14 py-2 cursor-pointer text-center inline-flex items-center relative"
                    >
                        All Categories
                        <AiFillCaretDown className="ml-1 mt-1" />
                        <ul
                            className={`${
                                toggleDropdown ? "" : "hidden"
                            } z-10 w-[230px] absolute top-full -left-0  bg-white rounded-b-lg divide-y divide-gray-100 shadow dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200`}
                        >
                            <DropdownListItem
                                link="/computer"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Computer
                            </DropdownListItem>
                            <DropdownListItem
                                link="/wish-list"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Telephone
                            </DropdownListItem>
                            <DropdownListItem
                                link="/TV"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                TV
                            </DropdownListItem>
                            <DropdownListItem
                                link="/accessory"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Accessory
                            </DropdownListItem>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <form className="flex items-center">
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:secondary focus:border-secondary block w-full pl-6 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:secondary  dark:focus:border-secondary "
                            placeholder="What are you looking for?"
                            required
                        />
                        <button
                        type="submit"
                        className="inline-flex absolute top-0 right-0 items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border-2 border-secondary focus:ring-4 focus:outline-none focus:secondary "
                    >
                        <FaSearch />
                    </button>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border-2 border-secondary focus:ring-4 focus:outline-none focus:secondary "
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div></div>
        </div>
    );
};

export default NavbarBottom;
