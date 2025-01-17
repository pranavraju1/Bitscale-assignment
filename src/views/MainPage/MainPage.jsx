import React from 'react'
import CustomNavbar from '../../components/Navbar/CustomNavbar'
import VarticalNavbar from '../../components/VarticalNavbar/VarticalNavbar'
import MenuSection from '../../components/MenuSection/MenuSection'
import MainSection from '../../components/MainSection/MainSection'
const MainPage = () => {
  return (
    <div>
        <CustomNavbar/>
        <VarticalNavbar/>
        <MenuSection/>
        <MainSection/>
    </div>
  )
}

export default MainPage
