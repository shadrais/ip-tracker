import React from 'react'
import arrow from '../assets/icon-arrow.svg'
const Header = () => {
  return (
    <>
      <div className='header-image'>
        <input
          className='input-box'
          placeholder='Search for any IP or Domain'
        />
        <button className='button'>
          <img src={arrow} alt='arrow' />
        </button>
      </div>
    </>
  )
}

export default Header
