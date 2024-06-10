import React from 'react'
import './Banner.css'
import BannerVideo1 from '../../assets/images/bannerVideo.mp4'
import bannerImage1 from '../../assets/images/BannerImage1.webp'
import bannerImage2 from '../../assets/images/BannerImage2.webp'
import ReactPlayer from 'react-player'
function Banner() {



    return (
        <div className='bannerSection1'>
            <div className='container-fluid bannercontainer'>
                <div className='row rowcontainer'>
                    <div className='col-sm-6 videocolum'>
                        <div className='box video_section'>
                            <video

                                playsInline
                                loop
                                autoPlay
                                muted
                                controls
                                className='w-100 transition s'>

                                <source src={BannerVideo1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='col-sm-3 imgagecolumn'>
                        <div className='box'>
                            <img src={bannerImage1} className='w-100 transition  banner1' />
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='box'>
                            <img src={bannerImage2} className='w-100 transition banner2' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
