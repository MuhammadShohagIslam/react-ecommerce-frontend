import React from "react";
import { Link } from "react-router-dom";
import Payment from "../../assets/footer/2.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-header mt-10">
            <div className="container">
                <footer className="footer p-10 sm:p-5 text-base-content">
                    <div>
                        <Link
                            to="/"
                            className="text-secondary italic font-bold text-4xl  cursor-pointer"
                        >
                            Aladin
                        </Link>
                        <p>
                            Aladin Industries Ltd.
                            <br />
                            Providing reliable products since 2022
                        </p>
                    </div>
                    <div>
                        <span className="text-md uppercase text-primary font-bold">
                            Company
                        </span>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Branding
                        </Link>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Design
                        </Link>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Marketing
                        </Link>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Advertisement
                        </Link>
                    </div>
                    <div>
                        <span className="text-md uppercase text-primary font-bold">
                            Legal
                        </span>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Branding
                        </Link>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Design
                        </Link>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Marketing
                        </Link>
                        <Link
                            to=""
                            className="link link-hover hover:text-success transition ease-in-out delay-15"
                        >
                            Advertisement
                        </Link>
                    </div>
                    <div>
                        <span className="text-md uppercase text-primary font-bold">
                            Newsletter
                        </span>
                        <div className="form-control w-80 sm:w-full">
                            <label className="label">
                                <span className="label-text">
                                    Enter your email address
                                </span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered w-full pr-16"
                                />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 flex justify-around sm:block cursor-pointer">
                    <img src={Payment} alt="" />
                    <div className="flex sm:mt-2 sm:justify-center">
                        <Link to="">
                            <FaFacebookF className="text-xl hover:text-success transition ease-in-out delay-15" />
                        </Link>
                        <Link to="">
                            <BsTwitter className="text-xl hover:text-success transition ease-in-out delay-15" />
                        </Link>
                        <Link to="">
                            <FaInstagram className="text-xl hover:text-success transition ease-in-out delay-15" />
                        </Link>
                        <Link to="">
                            <FaLinkedinIn className="text-xl hover:text-success transition ease-in-out delay-15" />
                        </Link>
                    </div>
                </footer>
                <footer className="footer flex justify-center px-10 sm:px-0 py-4 border-t bg-base-200 text-base-content border-base-300 text-center">
                    <p>Copyright © 2022 - All right reserved by Shohag</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
