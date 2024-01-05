import React from 'react';
import { ConvertiblesRoadsters_detail } from '/src/CarDetails.js';

const ConvertiblesRoadsters = () => {
  return (
    <main className="main bg flex justify-center items-center flex-col h-full p-3 pt-2 overflow-hidden">
      <div className='container flex w-full flex-col items-center justify-center'>
        <div className='flex justify-center items-center md:max-w-[900px] lg:max-w-[1300px] max-h-[50px] h-[50px] border-gray-300 border-b w-full'>
          <h1 className='font-serif font-normal text-3xl'>
            Convertibles & Roadsters
          </h1>
        </div>
        <div className="dataDisplay w-full justify-center max-w-[1300px] h-full mt-10 grid">
          {ConvertiblesRoadsters_detail.map((product) => (
            <div key={product.id} className='w-full flex flex-col h-[390px]'>
              <div className='lg:ml-10 ml-4 max-w-[150px] w-full'>
                <h3 className='font-medium border-cyan-500 p-2 font-serif text-l border rounded-full text-center'>
                  {product.productName}
                </h3>
              </div>
              <img className='max-w-[450px] md:ml-10 w-full' src={product.productImage} alt={product.productName} />
              <div className='md:pl-10 max-w-[550px] mt-5 w-full space-y-[0px]'>
                <div className='flex justify-between p-2'>
                  <button>LEARN MORE <span className='text-xl'>&gt;&gt;</span> </button>
                  <h3 className='font-serif mt-1'>{product. productFeature}</h3>
                </div>
                <div className='border-gray-300 mt-[50px] border-b'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ConvertiblesRoadsters;
