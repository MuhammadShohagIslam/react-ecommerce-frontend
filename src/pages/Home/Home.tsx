import React from "react";
import Banner from "../../components/Banner/Banner";
import Blogs from "../../components/Blogs/Blogs";
import CardImgSides from "../../components/CardImgSides/CardImgSides";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import ShopByCategories from "../../components/ShopByCategories/ShopByCategories";
import MainLayout from "../../layout/MainLayout";

const Home = () => {
    return (
        <MainLayout>
            <Banner />
            <Services/>
            <ShopByCategories/>
            <Products/>
            <CardImgSides/>
            <Blogs/>
        </MainLayout>
    );
};

export default Home;
