import React from 'react'
import Slider from './slider/Slider'
import CatSlider from '../../components/catSlider'
import ProductSlider from './productSlider/ProductSlider'
import Banner from '../../components/banners/Banner'
import CartBanner from '../../components/CartBanner/CartBanner'
import VideoBanner from '../../components/VideoBanner/VideoBanner'
import CompaniesLogo from '../../components/CompaniesLogo/CompaniesLogo'
import SignUp from '../../components/SignUp/SignUp'
import BlogPost from '../../components/BlopgPost/BlogPost'
function Home() {
    return (
        <>
            <Slider />
            <CatSlider />
            <ProductSlider heading={"Best Seller of Week"} buttontext={"View all products"} />
            <Banner />
            <ProductSlider heading={"Top Deals"} buttontext={"Top 10 most sold "} title={" Top 10 most sold this week, next day delivery."} />
            <CartBanner />
            <VideoBanner />
            <CompaniesLogo />
            <BlogPost />
            <SignUp />
        </>
    )
}

export default Home
