import React, { useState, useEffect } from 'react'
import Navbar from './componets/navbar'
import C_classSedan from './componets/c_classSedan'
import EClassSedan from './componets/eClassSedan'
import EclassWagon from './componets/e_classWagon'
import EQS_sedan from './componets/eqs_sedan'
import Maybach_sedan from './componets/maybach_sedan'
import Skeleton from './skeleton'
import Images from './BgImages'

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
        <Skeleton />
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