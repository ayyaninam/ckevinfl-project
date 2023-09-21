import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero__hero'>
            <div className='hero__container'>
                <div className='hero__content'>
                    <div className='hero__col-1'>
                        <h1></h1>
                        <h1><span className='hero__primary-color'>NUTRIGLUCOX</span></h1>
                        <p className='hero__front'>Have you ever wonder what kind of food should you eat to have a controlled sugar level.<br>
                        </br>
                            Let me introduced you to NUTRIGLUCOX the first app that will give you recipes entering your your sugar levels.  </p>
                    {/* <div className='hero__used-by'>                                               
                    </div>
                    </div>
                    <div className='hero__col-2'>
                        <div className='hero__form-layout'>
                            <div className='hero__form-container'>
                                <div className='hero__divider'>
                                    </div>
                                {/* <form action=''>
                                    <input type='text' placeholder='Name' />
                                    <input type='text' placeholder='Email' />
                                    <input type='text' placeholder='Password' />
                                    <button className="hero__button">Create Your Account</button> */}
                                {/* </form>
                            </div>
                            <div className='hero__form-footer'>
                                <p>
                                    By signing up, you agree to our
                                    <span className='hero__'> Terms, Data Policy</span> and <span className='hero__'> Cookies Policy</span>. */}
                                {/* </p> */}
                            {/* </div>
                        </div> */} 
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Hero