import React from "react";
import ShopByCategoryImg1 from "../../assets/category/computer.jpg";

const ShopByCategories = () => {
    return (
        <div className="container grid grid-cols-5 gap-7 md:grid-cols-3 sm:grid-cols-1 pb-20 sm:pt-0 md:pt-0">
            <div
                className="h-80 md:h-56 sm:h-52 bg-cover flex items-end md:items-center sm:items-center justify-center relative bg-no-repeat bg-center after:content-[''] after:bg-primary after:h-full after:opacity-40 after:absolute after:top-0 after:left-0 after:w-full  md:bg-center rounded-lg after:rounded-lg hover:shadow-xl transition ease-in-out delay-30 cursor-pointer"
                style={{ backgroundImage: `url(${ShopByCategoryImg1})` }}
            >
                <h3 className="text-white bottom-8 md:bottom-0 sm:bottom-0 text-2xl z-30 relative">
                    Computer
                </h3>
            </div>
            <div
                className="h-80 md:h-56 sm:h-52 bg-cover flex items-end md:items-center sm:items-center justify-center relative bg-no-repeat bg-center after:content-[''] after:bg-primary after:h-full after:opacity-40 after:absolute after:top-0 after:left-0 after:w-full  md:bg-center rounded-lg after:rounded-lg hover:shadow-xl transition ease-in-out delay-30 cursor-pointer"
                style={{ backgroundImage: `url(${ShopByCategoryImg1})` }}
            >
                <h3 className="text-white bottom-8 md:bottom-0 sm:bottom-0 text-2xl z-30 relative">
                    Computer
                </h3>
            </div>
        </div>
    );
};

export default ShopByCategories;
