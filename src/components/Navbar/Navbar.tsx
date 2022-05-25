import './Navbar.scss'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <nav className='navbar'>
         <Link to={'/'} className='navbar__name'>CONCERT CLUB</Link>
    </nav>
  )
}

export default Navbar