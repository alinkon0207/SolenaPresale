import React from 'react'
import InvestMain from './InvestSection/InvestMain'
import Navbar from '../common/Navbar'
import HeroSection from './HeroSection'
import WhyChoose from './WhyChoose/WhyChoose'
import ZigZag from '../../assets/images/zigzag.png'
import ZigZag2 from '../../assets/images/zigzag2.png'
import StrategyPlan from './StrategyPlan/StrategyPlan'
import Footer from '../common/Footer'
import FooterMobile from '../common/FooterMobile'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <img src={ZigZag2} alt="" className=' relative -top-20' />
      <InvestMain />
      <WhyChoose />
      <img src={ZigZag} alt="" className=' relative -top-20'/> 
      <StrategyPlan />
      <Footer />
      <FooterMobile />

    </>
  )
}

export default HomePage