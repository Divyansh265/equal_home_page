import React from 'react'
import './Nav.css'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
function Nav() {
    return (
        <>

            {
                window.innerWidth < 992 && <div className='navbarOverlay'></div>
            }
            <div className='nav d-flex align-items-center'>
                <div className='container-fluid  '>
                    <div className='row'>
                        {/* <div className='col-sm-4 part1'>
                        <Button className='bg-o  text-white catTab'><b>View catalog <KeyboardArrowDownIcon /></b></Button>
                    </div> */}
                        <div className='col-sm-12 part2'>
                            <nav>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <Button><Link>Ladders</Link></Button>

                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/duyk.png?crop=center&amp;height=60&amp;v=1709363070&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/duyk.png?crop=center&amp;height=60&amp;v=1709363070&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Equal Multipurpose Ladders" width="30" height="30" loading="lazy" /><Link to={"#"}>Telescopic Ladder</Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/Screenshot_2024-01-02_145900.png?crop=center&amp;height=60&amp;v=1709363142&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/Screenshot_2024-01-02_145900.png?crop=center&amp;height=60&amp;v=1709363142&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Equal Telescopic Ladder" width="30" height="30" loading="lazy" /><Link to={"#"}>Step Ladders
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/01.jpg?crop=center&amp;height=60&amp;v=1709363052&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/01.jpg?crop=center&amp;height=60&amp;v=1709363052&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Step Ladders" width="30" height="30" loading="lazy" /><Link to={"#"}>A Type Ladders</Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/DTL.png?crop=center&amp;height=60&amp;v=1709702906&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/DTL.png?crop=center&amp;height=60&amp;v=1709702906&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Extension Ladders" width="30" height="30" loading="lazy" /><Link to={"#"}>Telescopic Ladder</Link></Button>
                                                </li>
                                            </ul>
                                        </div>


                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Safe Lockers</Link></Button>


                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/safe_locker.png?crop=center&amp;height=60&amp;v=1709703069&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/safe_locker.png?crop=center&amp;height=60&amp;v=1709703069&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Safe" width="30" height="30" loading="lazy" /><Link to={"#"}>SecureX Series
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/B.jpg?crop=center&amp;height=60&amp;v=1709703076&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/B.jpg?crop=center&amp;height=60&amp;v=1709703076&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="SecureLite Safe Locker" width="30" height="30" loading="lazy" /><Link to={"#"}>SecureLite Series
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/1_48L.png?crop=center&amp;height=60&amp;v=1709703090&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/1_48L.png?crop=center&amp;height=60&amp;v=1709703090&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="SecureLitePro Safe Locker" width="30" height="30" loading="lazy" /><Link to={"#"}>SecureLitePro Series</Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/secure_x_pro.jpg?crop=center&amp;height=60&amp;v=1709702725&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/secure_x_pro.jpg?crop=center&amp;height=60&amp;v=1709702725&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="SecureXPro Safe Lockers" width="30" height="30" loading="lazy" /><Link to={"#"}>SecureXPro Safe Lockers</Link></Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Smart Door Locks</Link></Button>


                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/41eZLzUhrAL.jpg?crop=center&amp;height=60&amp;v=1715074886&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/41eZLzUhrAL.jpg?crop=center&amp;height=60&amp;v=1715074886&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="A8 Series" width="30" height="30" loading="lazy" /><Link to={"#"}>A8 Series
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/41E1d3D7YVL.jpg?crop=center&amp;height=60&amp;v=1715074865&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/41E1d3D7YVL.jpg?crop=center&amp;height=60&amp;v=1715074865&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="S8 Series" width="30" height="30" loading="lazy" /><Link to={"#"}>S8 Series
                                                        </Link></Button>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Platform Trolley</Link></Button>


                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/PVCPPT.png?crop=center&amp;height=60&amp;v=1713959294&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/PVCPPT.png?crop=center&amp;height=60&amp;v=1713959294&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="PVC Platform Trolley" width="30" height="30" loading="lazy" /><Link to={"#"}>Platform Trolley
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/YMPT.png?crop=center&amp;height=60&amp;v=1709702864&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/YMPT.png?crop=center&amp;height=60&amp;v=1709702864&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Steel Platform Trolley" width="30" height="30" loading="lazy" /><Link to={"#"}>Steel Platform Trolley

                                                        </Link></Button>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Weighing Instruments</Link></Button>


                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/smart_personal_scale.png?crop=center&amp;height=60&amp;v=1713959427&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/smart_personal_scale.png?crop=center&amp;height=60&amp;v=1713959427&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Smart Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>BMI Smart Scale

                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/sdfgh.png?crop=center&amp;height=60&amp;v=1713959591&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/sdfgh.png?crop=center&amp;height=60&amp;v=1713959591&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Kitchen Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>Kitchen Scale

                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/15.png?crop=center&amp;height=60&amp;v=1709702640&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/15.png?crop=center&amp;height=60&amp;v=1709702640&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Jewellery Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>Jewelry Scale
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/F__3.png?crop=center&amp;height=60&amp;v=1713959613&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/F__3.png?crop=center&amp;height=60&amp;v=1713959613&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Table Top Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>Table Top Scale


                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/7.png?crop=center&amp;height=60&amp;v=1709702785&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/7.png?crop=center&amp;height=60&amp;v=1709702785&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Platform Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>Platform Scale
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/3.jpg?crop=center&amp;height=60&amp;v=1711098420&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/3.jpg?crop=center&amp;height=60&amp;v=1711098420&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Chicken Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>Chicken Scale

                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/Crane_Scale.jpg?crop=center&amp;height=60&amp;v=1710851655&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/Crane_Scale.jpg?crop=center&amp;height=60&amp;v=1710851655&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Crane Scale" width="30" height="30" loading="lazy" /><Link to={"#"}>Crane Scale
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/IMG_7864.png?crop=center&amp;height=60&amp;v=1709702762&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/IMG_7864.png?crop=center&amp;height=60&amp;v=1709702762&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Load Cell Sensor" width="30" height="30" loading="lazy" /><Link to={"#"}>Load Cells

                                                        </Link></Button>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Caster</Link></Button>


                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/caster_wheels.jpg?crop=center&amp;height=60&amp;v=1709363123&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/caster_wheels.jpg?crop=center&amp;height=60&amp;v=1709363123&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Chair Caster" width="30" height="30" loading="lazy" /><Link to={"#"}>Chair Caster
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/EBOCW02_-_05.png?crop=center&amp;height=60&amp;v=1709702826&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/EBOCW02_-_05.png?crop=center&amp;height=60&amp;v=1709702826&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Furniture Caster" width="30" height="30" loading="lazy" /><Link to={"#"}>Furniture Caster


                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/caster.webp?crop=center&amp;height=60&amp;v=1713959187&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/caster.webp?crop=center&amp;height=60&amp;v=1713959187&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Platform Trolley Caster" width="30" height="30" loading="lazy" /><Link to={"#"}>Trolley Caster

                                                        </Link></Button>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Living & Storage</Link></Button>


                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/SR3.png?crop=center&amp;height=60&amp;v=1709363163&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/SR3.png?crop=center&amp;height=60&amp;v=1709363163&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Shoe Rack" width="30" height="30" loading="lazy" /><Link to={"#"}>Shoe Rack
                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/GCSV.png?crop=center&amp;height=60&amp;v=1709363179&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/GCSV.png?crop=center&amp;height=60&amp;v=1709363179&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Recliner Chair" width="30" height="30" loading="lazy" /><Link to={"#"}>Recliner Chair


                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/caster.webp?crop=center&amp;height=60&amp;v=1713959187&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/caster.webp?crop=center&amp;height=60&amp;v=1713959187&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Platform Trolley Caster" width="30" height="30" loading="lazy" /><Link to={"#"}>Trolley Caster

                                                        </Link></Button>
                                                </li>
                                                <li>
                                                    <Button><img class="" src="//www.equal.store/cdn/shop/collections/4.png?crop=center&amp;height=60&amp;v=1713959354&amp;width=60" srcset="//www.equal.store/cdn/shop/collections/4.png?crop=center&amp;height=60&amp;v=1713959354&amp;width=60 30w" sizes="
                           (min-width: 1000px) 30px
                           0
                         " alt="Laptop Stand" width="30" height="30" loading="lazy" /><Link to={"#"}>Laptop Stand

                                                        </Link></Button>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Bestseller</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>User Manunals</Link></Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
