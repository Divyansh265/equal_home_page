import React from 'react'
import './VideoBanner.css';
import Button2 from '@mui/material/Button';
function VideoBanner() {
    return (

        <section className='home-wrapper-1 py-2'>
            <div className="container">
                <div className=" row card__wrap--outer">
                    <div className="box  col card__wrap--inner">
                        <div className="card">
                            <video

                                playsInline
                                loop
                                autoPlay
                                muted
                                controls
                                className='w-100  transition'>

                                <source src='https://cdn.shopify.com/videos/c/vp/4c803c48746046d5a14b04a15ea99d7e/4c803c48746046d5a14b04a15ea99d7e.HD-1080p-7.2Mbps-27854776.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="card__item">
                                <h2>Get Your Product Shipped in Just 72 Hours!</h2>
                            </div>
                            <div className='buttonBox cursor'>
                                <Button2 className='bg-o  text-white catTab6'><b>Order Now</b></Button2>
                            </div>

                        </div>
                    </div>
                    <div className=" box col card__wrap--inner">
                        <div className="card">
                            <video

                                playsInline
                                loop
                                autoPlay
                                muted
                                controls
                                className='w-100 transition'>

                                <source src='https://cdn.shopify.com/videos/c/vp/4c803c48746046d5a14b04a15ea99d7e/4c803c48746046d5a14b04a15ea99d7e.HD-1080p-7.2Mbps-27854776.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="card__item">
                                <h2>Additional ₹1,000 off on Shoe Racks
                                </h2>
                            </div>

                            <div className="card__sub">
                                <span className='span1'>Extra because you deserve it. Use code:<span className='span2'>10SHOERACK</span></span>
                            </div>
                            <div className=' buttonBox cursor'>
                                <Button2 className='bg-o  text-white catTab6'><b>Shop Now </b></Button2>
                            </div>

                        </div>
                    </div>



                </div>
            </div>













































            {/* <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6 main_banner2'>
                        <div className='main-banner-content2 '>
                            <video

                                playsInline
                                loop
                                autoPlay
                                muted
                                controls
                                className='w-100 transition'>

                                <source src='https://cdn.shopify.com/videos/c/vp/db7b6507f2524bc9a19e3e73db84fbff/db7b6507f2524bc9a19e3e73db84fbff.SD-480p-1.5Mbps-28447708.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='col-6 main_banner2'>
                        <div className='main-banner-content2 p-1'>
                            <video

                                playsInline
                                loop
                                autoPlay
                                muted
                                controls
                                className='w-100 transition'>

                                <source src='https://cdn.shopify.com/videos/c/vp/4c803c48746046d5a14b04a15ea99d7e/4c803c48746046d5a14b04a15ea99d7e.HD-1080p-7.2Mbps-27854776.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default VideoBanner
