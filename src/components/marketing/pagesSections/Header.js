import React from 'react'
import Logo from '../../../media/svg/Logo-burger-house.svg'


export default function Header() {
  return (
    <div>
        <img src={Logo} alt='burger' className='w-64'/>
    </div>
  )
}
