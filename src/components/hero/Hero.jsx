import React from 'react'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'


import './hero.css'

export const hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero'>

      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header />
        {/* The Best Ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? "150px" : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          > </motion.div>

          <span>The Best Fitness Club In Town</span>
        </div>
        {/*The Hero Text*/}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Chisel </span>
            <span>Your</span>
          </div>
          <div><span>Ideal Body</span></div>
          <div>
            <span>
              In Here we will Help You To Shape and Build Your Ideal Body And Live Up Your Life To The Fullest
            </span>
          </div>
        </div>
        {/*Figures*/}
        <div className='figures'>
          <div>
            <span>
            <NumberCounter start={100} end={140} delay="4" preFix="+"/>
            </span>
            <span>expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter start={800} end={978} delay="4" preFix="+"/></span>
            <span>members Joined</span>
          </div>
          <div>
            <span><NumberCounter start={0} end={50} delay="4" preFix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Hero BUttons*/}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <motion.div className='heart-rate'
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}

        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/*Hero Img*/}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}



          src={hero_image_back} alt="" className='hero-image-back' />
        {/*Calories*/}
        <motion.div className='calories'
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}


        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default hero