import React from "react";
import StarRatings from "react-star-ratings";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageCard from "../../assets/category/beauty.jpg";

const CardImgSides = () => {
    return (
        <div className="container pb-16">
            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <Link to="/">
                    <div className="card bg-base-100 shadow-xl group grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                        <figure className="h-72 relative">
                            <div className="absolute top-3 rounded-full left-3 w-14 h-14 bg-success flex justify-center items-center flex-col">
                                <span className="text-white -mb-2">Off</span>
                                <span className="flex justify-center items-center text-white">
                                    56%
                                </span>
                            </div>
                            <ul className="transition duration-300 ease-in-out invisible flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:visible">
                                <li
                                    className="py-3 px-3 rounded-lg ml-2 border-2 border-success hover:bg-transparent hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer tooltip"
                                    data-tip="Add To WishList"
                                >
                                    <FaHeart />
                                </li>
                                <li
                                    className="py-3 px-3 rounded-lg ml-2 border-2 border-success hover:bg-transparent hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer tooltip"
                                    data-tip="Add To Cart"
                                >
                                    <FaShoppingCart />
                                </li>
                            </ul>
                            <img
                                className="h-full"
                                src={ImageCard}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="flex flex-col justify-center p-8 md:items-center sm:items-center md:p-6 sm:p-6 md:pt-3 sm:pt-3">
                            <p>Life Zed Air cx5</p>
                            <div className="py-2">
                                <span className="mt-1 text-xl font-medium mr-2 text-gray-900">
                                    $35
                                </span>
                                <span className="mt-2 line-through text-base font-medium text-accent">
                                    $35
                                </span>
                            </div>
                            <h2 className="card-title">
                                <StarRatings
                                    rating={5}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="17px"
                                    starSpacing="2px"
                                />
                            </h2>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CardImgSides;
