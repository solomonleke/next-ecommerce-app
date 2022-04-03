import React from 'react'
import Footer from './footer'
import NavBar from './nav'

export default function MainLayout({children}) {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
