import React from 'react'
import Logo from '../../../media/svg/Logo-burger-house.svg'


export default function Header() {
  return (
    <div className='flex items-center justify-between py-10 bg-gray-500'>
        <div className='bg-red-500 h-20 w-full'>
        <img src={Logo} alt='burger' className='w-64'/>
        </div>
        <div className=' h-20 w-full font-secondary'>
          c'est c'est monment de gouter
        </div>
    </div>
  )
}
