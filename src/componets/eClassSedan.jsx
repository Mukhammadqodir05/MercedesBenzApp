import React from 'react'
import { Link } from 'react-router-dom'
import EsedanBg from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/EsedanBg.png'
import bgRoad1 from '/src/assets/bgRoad1.jpg'
import EsedanBg2  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisGray.png'
import MyButton from './myButton'


const EClassSedan = () => {

  return ( 
   <main name='eClass'
     className='sections flex w-full h-screen justify-center items-center overflow-hidden'
         style={{backgroundImage: `url(${bgRoad1})`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat'}}
   >
      <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
          <h1 className='text-3xl font-serif font-bold'>E Class Sedan</h1>
          <p className='text-lg'>Starting at $81,300 *</p>
      </div>

       <div className='lg:hidden'>
          <img src={EsedanBg} alt="" />
      </div> 
      <div className='hidden lg:flex max-w-[1200px]'>
          <img src={EsedanBg2} alt="" />
      </div> 
      
      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
            <div className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2'>
               <MyButton to='/e_ClassSedan'>LEARN MORE</MyButton>
           </div>
            <Link className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 ' to='/buy'>BUY NOW</Link>
      </div>
   </main>
  )
}

export default EClassSedan