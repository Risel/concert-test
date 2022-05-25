import './Header.scss'

import React from 'react'

const Header:React.FC = () => {
  return (
    <div className='header'>
        <div className='header__title'>
            <h2>Twenty One Pilots</h2>
            <h4>22.02.23 в 21:00</h4>
        </div>
        <div className='header__btn'>
            <button>Купить билет</button>
        </div>
    </div>
  )
}

export default Header