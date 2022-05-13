import React from 'react'
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import { Team } from '../../components/Team';
import Domain from '../../components/Domain'
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Domain />
        <Team />
        <Footer />
    </div>
  )
}
