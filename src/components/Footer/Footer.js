import React from 'react'
import './Footer.css'
import SubscriberButton from '@mui/material/Button';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Subscript } from '@mui/icons-material'
import facebook from '../../assets/images/facebook-app-symbol.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
function Footer() {
    return (

        <footer >
            <div className='row container grid grid-five-column'>
                <div className=' col footer-about'>
                    <h3><Link>About</Link></h3>
                    <div className='row'><span><Link>Contact Us</Link></span></div>
                    <div className='row'><span><Link>Our Blogs</Link></span></div>
                    <div className='row'><span><Link>FAQ</Link></span></div>
                </div>
                <div className=' col footer-about'>
                    <h3>
                        <Link>
                            Categories
                        </Link>
                    </h3>
                    <div className='row'><span><Link>Ladders</Link></span></div>
                    <div className='row'><span>
                        <Link>

                            Safe Lockers
                        </Link>
                    </span>
                    </div>
                    <div className='row'><span>
                        <Link>

                            Platform Trolley
                        </Link>
                    </span></div>
                    <div className='row'><span>
                        <Link>

                            Weighing Scales
                        </Link>
                    </span></div>
                </div>
                <div className=' col footer-about'>
                    <h3>
                        <Link>
                            My Account
                        </Link>
                    </h3>

                    <div className='row'><span>
                        <Link>


                            Login
                        </Link>
                    </span></div>
                    <div className='row'><span>
                        <Link>

                            Sign Up
                        </Link>
                    </span></div>
                </div>
                <div className=' col footer-about'>
                    <h3>
                        <Link>
                            Support & Services
                        </Link>
                    </h3>
                    <div className='row'><span>
                        <Link>

                            Customer support
                        </Link>
                    </span></div>
                    <div className='row'><span>
                        <Link>

                            Terms & Conditions
                        </Link>
                    </span></div><div className='row'><span>
                        <Link>

                            Privacy Policy
                        </Link>
                    </span></div>
                    <div className='row'><span><Link>


                        Shipping Policy
                    </Link>
                    </span></div>
                    <div className='row'><span><Link>

                        Refund & Return Policy
                    </Link>
                    </span></div>
                    <div className='row'><span><Link>

                        Warranty Policy
                    </Link>
                    </span></div>
                    <div className='row'><span><Link>

                        Catalogue
                    </Link>
                    </span></div>
                </div>
                <div className=' col footer-about'>
                    <h3>
                        <Link>
                            Follow us
                        </Link>
                    </h3>
                    <div className='row'>
                        <div className='col'>
                            <img src={facebook}  ></img>
                        </div>
                        <div className='col'>
                            <img src={twitter}  ></img>
                        </div>
                        <div className='col'>
                            <img src={youtube}  ></img>
                        </div>
                        <div className='col'>
                            <img src={instagram}  ></img>
                        </div>
                        <div className='col'>
                            <img src={linkedin}  ></img>
                        </div>
                    </div>
                    <div className='row'>
                        <h4>Subscribe to our emails</h4>
                    </div>
                    <form action='#'>
                        <input type="text" required maxlength="50" className="form-control" placeholder='Email' id="first_name" name="first_name" />
                        <div className='col-2 pt-2 cursor'>
                            <SubscriberButton className='bg-o  text-white catTab8'><b>Subscribe</b></SubscriberButton>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row container grid '>
                <span>© 2024 Equal,</span>
            </div>
        </footer>

    )
}
// const Wrapper = styled.section``;
export default Footer
