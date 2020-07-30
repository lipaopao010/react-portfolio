import React from 'react';

import HeroSection from '../components/Hero';
import Nav from '../components/Nav';
import FooterSection from '../components/Footer';
import About from "../components/About"


function HomePage() {

    return(
        <>
        <Nav/>
        <HeroSection/>
        <About/>
    
        <FooterSection/>
        </>
    );
}

export default HomePage;