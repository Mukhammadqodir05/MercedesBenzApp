import React, { useState, useEffect } from 'react'
import Navbar from './componets/navbar'
import C_classSedan from './componets/c_classSedan'
import EClassSedan from './componets/eClassSedan'
import EclassWagon from './componets/e_classWagon'
import EQS_sedan from './componets/eqs_sedan'
import Maybach_sedan from './componets/maybach_sedan'
import Images from './BgImages'
import logo from '/src/assets/logo.png';


const App = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const images = Images.map(data => data.Image);
    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImageLoaded(true);
    });
  }, []);

  return (
   <main className='flex flex-col w-full h-full'> 
    { imageLoaded === false ? (
        <div className='flex flex-col bg-black w-full h-screen justify-center items-center '> 
         <img src={logo} alt="" className='max-w-[200px] w-full ' />
          <h1 className='gradient-text text-5xl absolute  bottom-14 font-bold'>Mercedes Benz</h1>
        </div>
      ) : (
      <>
        <Navbar />
        <C_classSedan />
        <EClassSedan />
        <EclassWagon />
        <EQS_sedan />
        <Maybach_sedan />
      </>
    )}
  </main>
  )
}

export default App