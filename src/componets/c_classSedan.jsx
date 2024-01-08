import React from 'react'
import { Link } from 'react-router-dom'
import bgRoad1 from '/public/assets/road2.jpg'
import SedanBlackBg from '/src/CarBackgroundDetails/C_classSedan/SedanImages/SedanWhiteBg.png'
import CsedanBg from '/src/CarBackgroundDetails/C_classSedan/SedanImages/CsedanBg.png'


const C_classSedan = () => {
  return (
    <main name='main' className='sections flex w-full h-screen justify-center items-center overflow-hidden'
          style={{backgroundImage: `url(${bgRoad1})`,
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat'}}
    >

    <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>C Class Sedan</h1>
        <p className='text-lg'>Starting at $59,900 *</p>
     </div>

    <div className='lg:hidden'  >
         <img src={CsedanBg} alt="" />
      </div> 

      <div className='hidden lg:flex max-w-[1200px]'>
         <img src={SedanBlackBg} alt="" />
      </div> 

      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
            <Link className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2' to='/c_ClassSedan'>LEARN MORE</Link>
            <Link className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 ' to='/buy'>BUY NOW</Link>
      </div>
    </main>
  )
}

export default C_classSedan
