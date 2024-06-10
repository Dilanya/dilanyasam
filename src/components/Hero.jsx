import React from 'react'
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {StarsCanvas} from './canvas';
import { Link } from 'react-router-dom';
import {navLinks} from '../constants';

const Hero = () => {

  
  
  return (
    <section className='relative w-full h-screen mx-auto '>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <div className="flex justify-center items-center h-screen mx-4 md:mx-0">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className={`${styles.heroHeadText}  md:text-6xl font-bold text-white leading-tight`}>
            Hi, I'm <span className="text-[#915eff]">Dilanya</span>
          </h1>
          <p className={`${styles.heroSubText}text-lg md:text-2xl text-white-100 mt-2 md:mt-4`}>
            I am an Developer
            <br/> and an AI/ML enthusiast 
          </p>
          <div class="mt-8 flex justify-center space-x-4">
            <a href="/resume.pdf" download>
              <button class="bg-transparent hover:bg-white-100 text-white-700 font-semibold hover:text-black py-2 px-6 border border-blue-500 hover:border-transparent rounded">
                Download Resume
              </button>
            </a>
          </div>
          
          <div className=" left-0 right-0 flex justify-center items-center mt-8">
        <div className="flex space-x-4">
          <a href="https://github.com/Dilanya" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold w-12 h-12 rounded-full">
              <i className="fab fa-github fa-2x" ></i>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/dilanya-samarakoon" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold w-12 h-12 rounded-full">
              <i className="fab fa-linkedin fa-2x"></i>
            </button>
          </a>
          <a href="https://www.youtube.com/@dilanyasamarakoon5905" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold w-12 h-12 rounded-full">
              <i className="fab fa-youtube fa-2x"></i>
            </button>
          </a>
          <a href="https://medium.com/@dilanyasamarakoon" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold w-12 h-12 rounded-full">
              <i className="fab fa-medium fa-2x"></i>
            </button>
          </a>
          <a href="https://www.pinterest.com/dilanyas" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold w-12 h-12 rounded-full">
              <i className="fab fa-pinterest fa-2x"></i>
            </button>
          </a>
        </div>
      </div>
          
        </div>
        
        

        
      </div>
      
      
      </div>

      

      <StarsCanvas/>

      
    </section>
  )
}

export default Hero;
