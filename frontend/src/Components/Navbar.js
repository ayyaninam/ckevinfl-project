import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './images/ideogram.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [click, setClick] = useState(false)
const [userLogged, setUserLogged] = useState(JSON.parse(localStorage.getItem("loggedInUser")));


    const handleClick = () => setClick(!click)

    function logout_user(e) {
        e.preventDefault()
        localStorage.removeItem("loggedInUser")
        window.location.reload()
      }

    return (
        <div className='navbar__navbar'>
            <div className='navbar__logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'navbar__nav-menu navbar__active' : 'navbar__nav-menu'}>
                


      {userLogged ? (<>
        <li className='navbar__nav-item'><Link to='/homepage'>Home</Link></li>
      <button className='btn btn-danger' onClick={(e) => logout_user(e)}>Logout - {userLogged['username']}</button>
      
      </>) : <>
      <li className='navbar__nav-item'><Link to='/login'>Sign in</Link></li>
    <li className='navbar__nav-item'><Link to='/register'>Sign up</Link></li>
      </>}

            </ul>
            <div className='navbar__hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

            </div>
        </div>
    )
}

export default Navbar