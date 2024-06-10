import React from 'react'
import './CartBanner.css';
import BigBanner from '../../assets/images/BigBanner.webp'
import { Link } from '@mui/material';
import Button2 from '@mui/material/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function CartBanner() {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-8 main_banner'>
                            <div className='main-banner-content p-1'>
                                <img src={BigBanner} alt='main banner' className='imageBanner' />
                            </div>
                        </div>
                        <div className='col-4 cart'>
                            <div className='productThumb'>
                                <span className='badge'>Sale -20%</span>


                                <div className='imgWrapper'>
                                    {/* <img className='w-100' src={props.image} />

                                    <div className='overlay trasition'>
                                        <div className='col-sm-2 cursor '>
                                            <Button2 className='  text-white catTab4'><b>Options</b></Button2>
                                        </div>
                                    </div> */}

                                </div>
                                <div className='info'>
                                    <h4 className='title '>Equal 48L SecureLite Digital Safe Locker with Pincode Access and Emergency Key - Black</h4>
                                    <span className='stock_number brand d-block '><Link>9 in stock</Link></span>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <span className='price text-danger'>Rs. 11,499.00</span> <span className='oldPrice'>Rs. 7,190.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 cursor'>
                                    <Button2 className='bg-o  text-white catTab5'><b>View catalog </b></Button2>
                                </div>
                            </div>
                            <div className='productThumb'>
                                <span className='badge'>Sale -20%</span>


                                <div className='imgWrapper'>
                                    {/* <img className='w-100' src={props.image} /> */}

                                    {/* <div className='overlay trasition'>
                                        <div className='col-sm-2 cursor '>
                                            <Button2 className='  text-white catTab4'><b>Options</b></Button2>
                                        </div>
                                    </div> */}

                                </div>
                                <div className='info'>
                                    <h4 className='title '><Link >Equal 48L SecureLite Digital Safe Locker with Pincode Access and Emergency Key - Black</Link></h4>
                                    <span className='stock_number brand d-block '><Link>9 in stock</Link></span>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <span className='price text-danger'>Rs. 11,499.00</span> <span className='oldPrice'>Rs. 7,190.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 cursor'>
                                    <Button2 className='bg-o  text-white catTab5'><b>View catalog </b></Button2>
                                </div>
                            </div>
                            <div className='productThumb'>
                                <span className='badge'>Sale -20%</span>


                                <div className='imgWrapper'>
                                    {/* <img className='w-100' src={props.image} />

                                    <div className='overlay trasition'>
                                        <div className='col-sm-2 cursor '>
                                            <Button2 className='  text-white catTab4'><b>Options</b></Button2>
                                        </div>
                                    </div> */}

                                </div>
                                <div className='info'>
                                    <h4 className='title '><Link >Equal 48L SecureLite Digital Safe Locker with Pincode Access and Emergency Key - Black</Link></h4>
                                    <span className='stock_number brand d-block '><Link>9 in stock</Link></span>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <span className='price text-danger'>Rs. 11,499.00</span> <span className='oldPrice'>Rs. 7,190.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 cursor'>
                                    <Button2 className='bg-o  text-white catTab5'><b>View catalog </b></Button2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartBanner
