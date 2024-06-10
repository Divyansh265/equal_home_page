import React from 'react'
import Slider from "react-slick";
import './Slider.css'
import BannerSlide1 from '../../../assets/images/Banner1.webp'
import BannerSlide2 from '../../../assets/images/Banner2.webp'
import BannerSlide3 from '../../../assets/images/Banner3.webp'
import BannerSlide4 from '../../../assets/images/Banner4.webp'

function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    };
    return (
        <section className='homeSlider'>
            <div className='container-fluid'>
                <Slider {...settings} className='home_slider_main'>
                    <div className='item'>
                        <img src={BannerSlide1} className='w-100'></img>
                    </div>
                    <div className='item'>
                        <img src={BannerSlide2} className='w-100'></img>
                    </div>
                    <div className='item'>
                        <img src={BannerSlide3} className='w-100'></img>
                    </div>
                    <div className='item'>
                        <img src={BannerSlide4} className='w-100'></img>
                    </div>

                </Slider>
            </div>
        </section>
    )
}

export default HomeSlider
