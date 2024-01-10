import React from 'react'
import { Link } from 'react-router-dom'
import bgRoad2 from '/src/assets/road2.jpg'
import EQSsedan2 from '/src/CarBackgroundDetails/EQS_sedan/EQSimages/irisRed.png'
import EQSsedan from '/src/CarBackgroundDetails/EQS_sedan/EQSimages/EQSsedan.png'
import MyButton from './myButton'

const EQS_sedan = () => {
  return (
    <main name='EQS'
      className='sections flex w-full h-screen justify-center items-center overflow-hidden'
        style={{backgroundImage: `url(${bgRoad2})`,
          backgroundPosition: 'center',
          backgroundSize:'cover',
          backgroundRepeat: 'no-repeat'}}
    >
       <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>EQS Sedan</h1>
        <p className='text-lg'>Starting at $147,550*</p>
     </div>

      <div className='lg:hidden'  >
        <img src={EQSsedan} alt="" />
      </div> 

      <div className='hidden lg:flex max-w-[1100px]'>
        <img src={EQSsedan2} alt="" />
      </div> 

      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
          <div className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2'>
               <MyButton to='/EQS_sedan'>LEARN MORE</MyButton>
           </div>
           <div className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 '>
               <MyButton to='/contact'>BUY NOW</MyButton>
           </div>
      </div>
  </main>
  )
}

export default EQS_sedan