import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='navbar__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />



            <div className='navbar__search'>
                <input type="text" className='navbar__search-in'
                />
                {/* search logo */}
            </div>

            <div className='navbar__nav'>
                <div className='navbar__nav-opts'>
                    <span className='navbar__nav-opt1'>Hello</span>
                    <span className='navbar__nav-opt2'>Sign In</span>
                </div>
                <div className='navbar__nav-opts'>
                    <span className='navbar__nav-opt1'>Returns</span>
                    <span className='navbar__nav-opt2'> & Orders </span>
                </div>
                <div className='navbar__nav-opts'>
                    <span className='navbar__nav-opt1'>Your</span>
                    <span className='navbar__nav-opt2'>Prime</span>
                </div>
            </div>





        </div>


    )
}

export default Navbar
