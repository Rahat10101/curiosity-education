import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/facebook-square-brands.svg';
import instagram from '../../Assets/instagram-brands.svg';
import twitter from '../../Assets/twitter-brands.svg';
import location from '../../Assets/location-dot-solid.svg';
import phone from '../../Assets/square-phone-flip-solid.svg';
import mail from '../../Assets/square-envelope-solid.svg';



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear(); 
    return (
        <footer className='bg-dark text-light py-5  mt-4'>
         <div className='container'>
            <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                    <h5>Curiosity Education</h5>
                        <h6>“If you really want to learn programming, and build a career in IT farms, then you are in the right position. Build your basics and career with us. ”</h6>
                        <div className='mt-3 d-flex gap-3'>
                            <div>
                            <img src={facebook} width={20} alt="" />
                        </div>
                            <div>
                            <img src={instagram} width={20} alt="" />
                        </div>
                            <div>
                                <img src={twitter} width={20} alt="" />
                            </div>
                        </div>
            </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <h5>Menu</h5>
                        <Link className='text-decoration-none  btn btn-outline-light' to='/'>Home</Link>
                        <Link className='text-decoration-none  btn btn-outline-light mx-3' to='/about'> About</Link>
                        <Link className='text-decoration-none  btn btn-outline-light' to='/blog'> Blog</Link>
            </div>
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <img src={location} width={20} alt="" /> Bangladesh
                        <br /> <br />
                        <img src={phone} width={20} alt="" /> +88 01715229424
                        <br /> <br />
                        <img src={mail} width={20} alt="" /> 10101rahat@gmail.com
            </div>
            </div>
            
        </div>
            <p className='text-center mt-4'><small>Copyright © { year}</small></p>
        </footer>
    );
};

export default Footer