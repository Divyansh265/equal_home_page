import React from 'react'
import './style.css';
// import Product1 from '../../assets/images/product1.webp'
import { Link } from '@mui/material';
import Button2 from '@mui/material/Button';
function Product(props) {
    return (
        <div className='productThumb'>
            <span className='badge'>Sale -20%</span>


            <div className='imgWrapper'>
                <img className='w-100' src={props.image} />

                <div className='overlay trasition'>
                    <div className='col-sm-2 cursor '>
                        <Button2 className='  text-white catTab4'><b>Options</b></Button2>
                    </div>
                </div>

            </div>
            <div className='info'>
                <h4 className='title '><Link >Equal 12.5 FT. Aluminium Folding Telescopic Ladder/Portable and Extension Ladder for Home</Link></h4>
                <span className='stock_number brand d-block '><Link>9 in stock</Link></span>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <span className='price text-danger'>Rs. 11,499.00</span> <span className='oldPrice'>Rs. 7,190.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
