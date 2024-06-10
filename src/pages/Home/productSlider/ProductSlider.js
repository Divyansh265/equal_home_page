import React from 'react'
import './ProductSlider.css'
import Button2 from '@mui/material/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Product from '../../../components/product';
import Slider from "react-slick";
import Product1 from '../../../assets/images/product1.webp'
import Product2 from '../../../assets/images/product2.webp'
import Product3 from '../../../assets/images/product3.webp'
import Product4 from '../../../assets/images/product4.webp'
import Product5 from '../../../assets/images/product5.webp'
import Product6 from '../../../assets/images/product6.webp'
import Product7 from '../../../assets/images/product7.webp'
import Product8 from '../../../assets/images/product8.webp'

function ProductSlider(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,


    };
    return (
        <div>
            <section className='homeProduct'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-10'><h2 className='hd text-g '>{props.heading}</h2>
                            <span> {props.title}</span></div>
                        <div className='col-sm-2 cursor button_categories2 d-md-flex justify-content-md-end '>
                            <Button2 className='bg-o  text-white catTab3'><b>{props.buttontext}<KeyboardArrowDownIcon /></b>

                            </Button2>
                        </div>
                    </div>
                    <div className='row ProductRow' >
                        <Slider {...settings} className='home_slider_main2'>
                            <div className='item'>
                                <Product image={Product1} />
                            </div>
                            <div className='item'>
                                <Product image={Product2} />
                            </div>
                            <div className='item'>
                                <Product image={Product3} />
                            </div>
                            <div className='item'>
                                <Product image={Product4} />
                            </div>
                            <div className='item'>
                                <Product image={Product5} />
                            </div>
                            <div className='item'>
                                <Product image={Product6} />
                            </div>
                            <div className='item'>
                                <Product image={Product7} />
                            </div>
                            <div className='item'>
                                <Product image={Product8} />
                            </div>
                        </Slider >
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductSlider
