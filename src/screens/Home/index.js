import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
// import Sidebar from '../../components/Sidebar';
import { Team } from '../../components/Team';
export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Team />
    </div>
  )
}
