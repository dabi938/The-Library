import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Banner from './Banner'
import HomeAbout from './HomeAbout'
import HomeService from './HomeService'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <HomeAbout/>
      <HomeService/>
      <Footer/> 
    </div>
  )
}

export default Home
