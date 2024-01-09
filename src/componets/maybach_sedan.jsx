import React from 'react'
import { Link } from 'react-router-dom'
import bgRoad1 from '/src/assets/bgRoad1.jpg'
import maybachBg2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisMango.png'
import maybachBg from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/maybachBg.png'
import MyButton from './myButton'

const Maybach_sedan = () => {
  return (
    <main className='sections flex flex-col w-full h-screen justify-center items-center overflow-hidden p-3'
          style={{backgroundImage: `url(${bgRoad1})`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat'}}
    >
      <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>Maybach Sedan</h1>
        <p className='text-lg'>Starting at $230,000*</p>
      </div>

      <div className='lg:hidden '>
        <img src={maybachBg} alt="" />
      </div>
      <div className='hidden lg:flex max-w-[1000px]'>
         <img src={maybachBg2} alt="" />
      </div>  
      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
           <div className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2'>
               <MyButton to='/Maybach_Sclass'>LEARN MORE</MyButton>
           </div>
            <Link className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 ' to='/buy'>BUY NOW</Link>
      </div>
    </main>
  )
}

export default Maybach_sedan
