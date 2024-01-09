import React from 'react'
import bgRoad2 from '/src/assets/road2.jpg'
import { Link } from 'react-router-dom'
import WagonBg from '/src/CarBackgroundDetails/E_classWagon/WagonImages/WagonBg.png'
import WagonBg2  from '/src/CarBackgroundDetails/E_classWagon/WagonImages/irisBlue.png'
import MyButton from './myButton'

const EclassWagon = () => {
  return (
    <main name='eClassWagon'
      className='sections flex w-full h-screen justify-center items-center overflow-hidden'
          style={{backgroundImage: `url(${bgRoad2})`,
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat'}}
    >
    
    <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>E Class Wagon</h1>
        <p className='text-lg'>Starting at $71,000 *</p>
     </div>

     <div className='lg:hidden'  >
         <img src={WagonBg} alt="" />
      </div> 

      <div className='hidden lg:flex max-w-[1200px]'>
         <img src={WagonBg2} alt="" />
      </div> 
     
      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
           <div className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2'>
               <MyButton to='/e_ClassWagon'>LEARN MORE</MyButton>
           </div>
            <Link className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 ' to='/buy'>BUY NOW</Link>
      </div>
    </main>
  )
}

export default EclassWagon