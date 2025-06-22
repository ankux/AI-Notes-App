'use client'
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
        <div className={`md:w-64 h-screen fixed bg-white z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <SideBar />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className='md:ml-64'>
            <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className='p-5 md:p-10'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout