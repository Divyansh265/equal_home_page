import React from 'react'
import './style.css'
// import Slider from "react-slick";
// import { fade } from '@material-ui/core';
import ImageCar1 from '../../assets/images/categoryImage1.avif'
import ImageCar2 from '../../assets/images/categoryImage2.avif'
import ImageCar3 from '../../assets/images/categoryImage3.avif'
import ImageCar4 from '../../assets/images/categoryImage4.avif'
import ImageCar5 from '../../assets/images/categoryImage5.avif'
import ImageCar6 from '../../assets/images/categoryImage6.avif'
import ImageCar7 from '../../assets/images/categoryImage7.avif'
import ImageCar8 from '../../assets/images/categoryImage8.avif'
import arrorright from '../../assets/images/chevron-right.svg'
import Button2 from '@mui/material/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function CatSlider() {

    return (
        <>

            <div className='bannerSection'>
                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-sm-10'><h2 className='hd text-g '>Categories to Explore</h2></div>
                        <div className='col-sm-2 cursor button_categories2 d-md-flex justify-content-md-end '>
                            <Button2 className='bg-o  text-white catTab3'><b>View all categories <KeyboardArrowDownIcon /></b></Button2>
                        </div>
                    </div>
                    <div className='row  '>

                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar1} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Telescopic Ladder <img src={arrorright} height={10}></img></h5>

                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar2} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Shoe Rack <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar3} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">SecureLite Safe Locker <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar4} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Step Ladders <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col '>
                            <div className='box'>
                                <img src={ImageCar5} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Chair Caster <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar6} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Smart Scale <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar7} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Recliner Chair <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box'>
                                <img src={ImageCar8} className='w-100 tra card-img-top' />
                                <div class="card-body">
                                    <h5 class="card-title">Multipurpose Ladders <img src={arrorright} height={10}></img></h5>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default CatSlider
