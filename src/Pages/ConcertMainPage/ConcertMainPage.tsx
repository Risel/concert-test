import './ConcertMainPage.scss'

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import ConcertInfo from '../../components/ConcertInfo/ConcertInfo'

const ConcertMainPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Header />
      <ConcertInfo />
    </div>
  )
}

export default ConcertMainPage