import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";

const Blogs = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <div className="flex">
                            <div className="flex items-center text-success">
                                <BsCalendarDate />
                                <span className="ml-1">2022, 20, 20</span>
                            </div>
                            <div className="flex items-center ml-3 text-success">
                                <BiUserPlus />
                                <span className="ml-1">User</span>
                            </div>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
