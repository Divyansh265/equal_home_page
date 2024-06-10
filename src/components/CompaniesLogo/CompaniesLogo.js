import React from 'react'
import './Companies.css'
import Slider from "react-slick";
import Flipkart from '../../assets/images/Flipkart.avif'
import Airtel from '../../assets/images/Airtel.avif'
import Amazon from '../../assets/images/Amazon.avif'
import Bosch from '../../assets/images/Bosch.avif'
import Godrej from '../../assets/images/Godrej.avif'
import Govt_of_India from '../../assets/images/Govt_of_India.avif'
import India_Post from '../../assets/images/India_Post.webp'
import Indian_Railways from '../../assets/images/Indian_Railways.avif'
import Jio from '../../assets/images/Jio.avif'
import Kajaria from '../../assets/images/Kajaria.avif'
import Larsen___Toubro from '../../assets/images/Larsen___Toubro.webp'
import Rajasthan_State_Mines from '../../assets/images/Rajasthan_State_Mines.avif'
import Rashmi_Group from '../../assets/images/Rashmi_Group.avif'
import Reliance from '../../assets/images/Reliance.webp'
import TATA_Power from '../../assets/images/TATA_Power.avif'
function CompaniesLogo() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrow: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    };
    return (
        <div className='container'>
            <div class="row d-flex justify-content-center ">
                <Slider {...settings} className='home_slider_box'>
                    <div class="col-lg-2 col-md-6"><img src={Flipkart} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Airtel} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Amazon} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Bosch} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Godrej} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Govt_of_India} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={India_Post} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Indian_Railways} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Jio} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Kajaria} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Larsen___Toubro} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Rajasthan_State_Mines} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Rashmi_Group} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Govt_of_India} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={Reliance} className='w-50'></img></div>
                    <div class="col-lg-2 col-md-6"><img src={TATA_Power} className='w-50'></img></div>

                </Slider>
            </div>
        </div>
    )
}

export default CompaniesLogo
