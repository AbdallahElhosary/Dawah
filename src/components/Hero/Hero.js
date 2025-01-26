import React from 'react'
import "./Hero.scss"
import bg from "../../assets/background.PNG"
const Hero = () => {

    console.log(bg)
  return (
    <section className='hero'>
          <h2 className="text-3xl font-bold text-green-700 mb-4">مرحبًا بكم في موقع الدعوة السلفية بالباجور </h2>
          <p className="text-gray-600 mb-6">اكتشف المحاضرات والتسجيلات الصوتية والقرآن الكريم</p>
    </section>
  )
}

export default Hero
