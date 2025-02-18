import React from 'react'
import "./Hero.scss"
import dots from "../../assets/dots.png"
const Hero = () => {

  return (
    <section className='hero second-bg'>
            <img src={dots} alt='Dots' className='dots max-sm:hidden md:block' /> 
      <img src={dots} alt='Dots'  className='dots'/> 
      
      <div className='hero-text p-4 rounded text-white text-center'>
        <h2 className="font-bold mb-4 ">الدعوة السلفية بالباجور</h2>
        <p className="mb-6 text-2xl">منصة لنشر محتوى مشايخ الدعوة السلفية، تشمل تلاوات القرآن، المحاضرات، الفقه، والعقيدة، بهدف نشر العلم الشرعي الصحيح للجميع</p>
        <div className='flex bg-white p-3  rounded'>
          <input
            type="search"
            placeholder="ابحث عن محتوى..."
            className="w-full pl-10 pr-4 py-2 rounded-full  focus:outline-none main-color"
          />
          <button className="main-bg px-4 text-white text-xl font-bold rounded" type='submit'>بحث</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
