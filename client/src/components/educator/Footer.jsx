import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t'>
      <div>
        <img src={assets.logo_1_white} alt="" className='hidden md:block w-20' />
      </div>

    </footer>
  )
}

export default Footer
