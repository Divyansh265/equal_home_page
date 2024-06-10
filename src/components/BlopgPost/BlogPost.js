import React from 'react'
import './BlogPost.css'
import { Link } from '@mui/material';
import Button2 from '@mui/material/Button';
import BlogImage from '../../assets/images/BlogImage.webp'
import BlogImage1 from '../../assets/images/BlogImage1.webp'
import BlogImage2 from '../../assets/images/BlogImage2.webp'
function BlogPost() {
    return (
        <section className='homeProduct'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-10'>
                        <h2 className='hd text-g '>Blog Posts</h2>
                    </div>

                </div>
                <div className='row ProductRow' >
                    <div className='col productThumb'>
                        <div className='imgWrapper1'>
                            <img className='w-100 transition' src={BlogImage} />
                        </div>
                        <div className='info'>
                            <span className='stock_number brand d-block  '><Link>May 30 2024 by Okas Concepts</Link></span>
                            <h4 className='title '><Link >

                                How do you assemble and use a telescopic ladder? | Equal
                            </Link></h4>

                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <span className='oldPrice'>Read more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col productThumb'>
                        <div className='imgWrapper2'>
                            <img className='w-100 transition' src={BlogImage1} />
                        </div>
                        <div className='info'>
                            <span className='stock_number brand d-block '><Link>May 30 2024 by Okas Concepts</Link></span>
                            <h4 className='title '><Link >



                                5 Easy Tips of Shoe Rack Cleaning and Maintaining
                            </Link></h4>

                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <span className='oldPrice'>Read more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col productThumb'>
                        <div className='imgWrapper3'>
                            <img className='w-100 transition' src={BlogImage2} />
                        </div>
                        <div className='info'>
                            <span className='stock_number brand d-block '><Link>May 30 2024 by Okas Concepts</Link></span>
                            <h4 className='title '><Link >

                                Four Benefits of Having a Body Weighing Machine at Home
                            </Link></h4>

                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <span className='oldPrice'>Read more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPost
