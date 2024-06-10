import React from 'react'
import './SignUp.css'
import SubscribeButton from '@mui/material/Button';
function SignUp() {
    return (
        <section className='home-wrapper-1 py-2'>
            <div className="container1">
                <div className=" row card__wrap--outer">
                    <div className="box  col card__wrap--inner">
                        <div className="card">

                            <div className="card__item">
                                <h2>Sign up to our newsletter</h2>
                            </div>
                            <div className="card__sub">
                                <span className='span1'>To receive exclusive discount, updates on seasonal products, new products and other news you can use, sign up now!</span>
                            </div>

                            <div class="row justify-content-center">
                                <div className="col-3 pt-4 ">
                                    {/* <label>First Name</label> */}
                                    <input type="text" required maxlength="50" class="form-control" placeholder='Email' id="first_name" name="first_name" />
                                </div>

                                <div className='col-2 pt-2 cursor'>
                                    <SubscribeButton className='bg-o  text-white catTab7'><b>Subscribe</b></SubscribeButton>
                                </div>

                            </div>
                            {/* <div class="mb-5 row">
                                <div class="col">
                                    <label>First Name</label>
                                    <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name" />
                                </div>
                                <div class="col">
                                    <label>Last Name</label>
                                    <input type="text" required maxlength="50" class="form-control" id="last_name" name="last_name" />
                                </div>
                            </div> */}
                            {/* <div className='buttonBox cursor'>
                                <SubscribeButton className='bg-o  text-white catTab7'><b>Subscribe</b></SubscribeButton>
                            </div> */}

                        </div>
                    </div>




                </div>
            </div>









        </section>
    )
}

export default SignUp
