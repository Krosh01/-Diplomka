import React from 'react'
import { Outlet } from 'react-router-dom'
import Basket from '../pages/basket/basket'
import Header from './Header/Header'
import HeaderStatic from './Header/headerStatic'

const Layout = () => {
  return (
    <>
    {/* <Header/> */}
    <Basket/>
    <Outlet/>
    <HeaderStatic/>
    </>
  )
}

export default Layout