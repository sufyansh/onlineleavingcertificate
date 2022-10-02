/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'
import logo from '../../assest/duet_logo.png';
import './navbar.scss'
 const navbar = () => {
  return (
    <div className='Topbar'>
        <div className='container'>
            <div className='coloumn one'>
                <div className='logo_bar' >
                    <a className='logo' href='#'>
            
                         <img className='img ' src={logo} alt="">          
                         </img>
                    </a>
                </div>
                <div className='title-wrapper'>
                    <h1>
                        <h2 className='logo-title'>
                            Dawood University of Engineering & Technology   </h2>
                    </h1>
                    <h5 className='slogan'>Together We Grow </h5>
                </div>
            </div>
        </div>
    </div>
  )
}
export default navbar;