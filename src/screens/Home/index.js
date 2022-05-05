import React from 'react'
import Hero from '../../components/Hero';
import About from '../../components/About';
// import Sidebar from '../../components/Sidebar';
import { Team } from '../../components/Team';
export const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Team />
    </div>
  )
}
