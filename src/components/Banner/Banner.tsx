import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import SwipperSlider from "./SwipperSlider/SwipperSlider";

interface BannerProducts {
    bannerProducts: {}[]
}

const Banner = ({bannerProducts}:BannerProducts) => {
    return (
        <section>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
              
               {bannerProducts.map((bannerProduct:any)=>{
                <SwipperSlider bannerProduct={bannerProduct}/>
               })} 
            </Swiper>
        </section>
    );
};

export default Banner;
