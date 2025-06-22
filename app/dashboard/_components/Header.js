import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'

const Header = ({ onMenuClick }) => {
  return (
    <div className='flex justify-between md:justify-end p-5 shadow-sm'>
        <button className="md:hidden" onClick={onMenuClick}>
            <Menu className="h-6 w-6" />
        </button>
        <UserButton/>
    </div>
  )
}

export default Header