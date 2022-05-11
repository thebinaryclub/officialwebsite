import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
// import Sidebar from '../../components/Sidebar';
import { Team } from '../../components/Team';
// import Particles from "react-tsparticles";
// import particlesconfig from '../../assets/particlesconfig.json';
import Domain from '../../components/Domain'
import Footer from '../../components/Footer';
import { Spacer } from '@chakra-ui/react';
export const Home = () => {
  return (
    <div>
        <Navbar />
        <div style={{
      backgroundImage: "url('/images/bgbin.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "3000px 1000px",
      // height: '100vh',
      // width: '100vw',
    }}>
        <Hero />
        </div>
        <About />
        <Domain />
        <Team />
        <Footer />
    </div>
  )
}
