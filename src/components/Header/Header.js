import React, { useEffect, useRef, useState } from 'react'
import '../Header/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/images/Equal.png'
import AccountLogo from '../../assets/images/user.png'
import CartLogo from '../../assets/images/cart.png'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Form, Button, Dropdown } from 'react-bootstrap';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from './nav/Nav';
import Button2 from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    // const headerRef = useRef()
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         let position = window.pageYOffset
    //         if (position > 50) {
    //             headerRef.current.classList.add('fixed')
    //         } else {
    //             headerRef.current.classList.remove('fixed')
    //         }
    //     })
    // })

    return (
        <>
            <div className='headWrapper'>
                <header  >
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2 d-flex align-items-center cursor logo part_1'>
                                <Link> <img height={70} width={140} src={Logo} /></Link>
                                <div className='navbarToggle '>
                                    {/* <MenuIcon /> */}
                                </div>
                            </div>
                            <div className='col-sm-2 cursor part_2'>
                                <Button2 className='bg-o res-hide  text-white catTab2'><b>View catalog <KeyboardArrowDownIcon /></b></Button2>
                            </div>
                            <div className='col-sm-4 part_3'>
                                <div className='headerSearch d-flex align-items-center'>
                                    <div className='Search'>
                                        <input type='text' placeholder='What are you looking for?' />
                                        <span className='searchIcon cursor'>
                                            <SearchIcon />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-3 d-flex align-items-center  part_4'>
                                <div className='ml-auto d-flex align-items-center'>
                                    <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            <li className='list-inline-item' >

                                                <spam onClick={() => setIsOpenDropDown(!isOpenDropDown)}><img height={20} width={23} src={AccountLogo} />
                                                    {/* <KeyboardArrowDownIcon className='arrow' /> */}
                                                </spam>

                                                {isOpenDropDown != false &&
                                                    < div className='dropdownMenu'>
                                                        <div className="formdropbox d-flex justify-content-center align-items-center h-50 ">
                                                            <Form className="p-4 border rounded">
                                                                <h2 className="mb-4 fw-bold ">Login</h2>
                                                                <Form.Group controlId="formEmail">
                                                                    <Form.Label className='fw-bold'>Email</Form.Label>
                                                                    <Form.Control type="email" placeholder="Enter email" required />
                                                                </Form.Group>

                                                                <Form.Group controlId="formPassword" className="mt-3">
                                                                    <Form.Label className='fw-bold'>Password</Form.Label>
                                                                    <Form.Control type="password" placeholder="Password" required />
                                                                </Form.Group>

                                                                <Button variant="link" className="btn-orange-200 p-0 mt-2">Forgot your password?</Button>

                                                                <Button type="submit" className="btn-orange-500 mt-3 w-100 ">Sign in</Button>

                                                                <Dropdown className="mt-3">



                                                                </Dropdown>

                                                                <div className="text-center mt-4">
                                                                    <span>Don't have an account yet? </span>
                                                                    <div>
                                                                        <a href="/create-account" className='btn-orange-200'>Create account</a>
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </div>

                                                }


                                            </li>


                                            <li className='list-inline-item'>
                                                <spam><img height={20} width={23} src={CartLogo} />
                                                    <span className='badge bg-dark rounded-circle'>0</span>
                                                </spam>
                                            </li>
                                        </ul>
                                    </ClickAwayListener>
                                </div>
                            </div>

                        </div>
                    </div>
                </header >
                <Nav />
            </div>
        </>
    )
}

export default Header
