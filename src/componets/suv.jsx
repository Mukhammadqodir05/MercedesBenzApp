import React from 'react'
import blackBg from '/src/CarBackgroundDetails/C_classSedan/SedanImages/blackBg.png'
import bgRoad1 from '/src/CarBackgroundDetails/C_classSedan/SedanImages/bgRoad1.jpg'
import SedanBlackBg from '/src/CarBackgroundDetails/C_classSedan/SedanImages/SedanBlackBg.png'

const Suv = () => {
  return (
    <main className='suvBg  flex w-full h-screen justify-center items-center overflow-hidden'>
    
    <div className='lg:hidden'  >
         <img src={blackBg} alt="" />
      </div> 


      <div className='hidden lg:flex'>
         <img src={SedanBlackBg} alt="" />
      </div> 
    </main>
  )
}

export default Suv
