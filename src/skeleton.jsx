import React from 'react';

const Skeleton = () => {

    return (
        <div className="w-full bg-gray-400 h-full flex flex-col items-center justify-center">
            <div className="fixed top-0 z-50 flex justify-between items-center w-full h-[100px] px-4 md:px-8 bg-slate-500">
                <div className="w-20 border border-black h-20 bg-gray-300 rounded-full animate-pulse"></div>
                <ul className='hidden md:flex space-x-6'>
                    <li className='w-20 h-8 bg-gray-300 rounded-md animate-pulse'></li>
                    <li className='w-20 h-8 bg-gray-300 rounded-md animate-pulse'></li>
                    <li className='w-20 h-8 bg-gray-300 rounded-md animate-pulse'></li>
                    <li className='w-20 h-8 bg-gray-300 rounded-md animate-pulse'></li>
                    <li className='w-20 h-8 bg-gray-300 rounded-md animate-pulse'></li>
                </ul>
                <div className="hidden md:flex w-20 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="md:hidden w-10 h-10 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            <div className='flex mt-10 flex-col w-full h-[3220px] justify-center items-center overflow-y-auto'>
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex flex-col gap-4 justify-center items-center w-full h-full bg-gray-400 p-4">
                        <div className="w-full max-w-[600px] h-[400px] animate-pulse bg-gray-600 rounded-md mb-2"></div>
                        <div className='flex w-full max-w-[550px] justify-center items-center rounded-md md:grid md:grid-cols-2 text-center flex-col gap-5'>
                            <button className='w-full max-w-[400px] md:w-[250px] h-8 bg-gray-300 rounded-md animate-pulse'></button>
                            <button className='w-full max-w-[400px] md:w-[250px] h-8 bg-gray-300 rounded-md animate-pulse'></button>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="bottom-0 animate-pulse z-50 w-full h-[100px] px-4 md:px-8 bg-slate-500 flex justify-center items-center">
                <p className="text-white">© 2024 Mercedes. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Skeleton;


