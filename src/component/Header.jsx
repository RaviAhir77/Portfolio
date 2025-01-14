import React from 'react'
import Logo from '../asset/R-logo.png'
import '../css/Header.css'

const header = () => {
  return (
    <div className='header'>
        <div className='hLogo'>
            <img src={Logo} alt="Logo" className='HLogoImg' draggable='false'/>
        </div>
        <div className='hContaint'>
            <ul className='nav'>
                <li className='nav-item'><a href="" draggable='false'>Profile</a></li>
                <li className='nav-item'><a href="" draggable='false'>Skill</a></li>
                <li className='nav-item'><a href="" draggable='false'>Project</a></li>
            </ul>
        </div>
    </div>
  )
}

export default header