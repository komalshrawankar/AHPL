import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import SkyPlaneSection from '../components/Home/SkyPlaneSection'
import ProductsSection from '../components/Home/ProductsSection'
import WhyChooseSection from '../components/Home/WhyChooseSection'
import CertificationsSection from '../components/Home/CertificationsSection'
import Footer from '../components/Footer'
import TestimonialsSection from '../components/testimonials'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkyPlaneSection />
            <ProductsSection />
            <WhyChooseSection/>
            <CertificationsSection/>
            <TestimonialsSection/>
            <ContactCTA/>
            <Footer/>
        </div>
    )
}

export default Home
