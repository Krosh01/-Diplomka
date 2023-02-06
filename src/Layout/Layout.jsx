import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import HeaderStatuc from './Header/HeaderStatuc'

const Layout = () => {
  return (
    <>
    {/* <Header/> */}
    {/* <HeaderStatuc/> */}
    <Outlet/>
    </>
    
  )
}

export default Layout