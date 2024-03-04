import React, {useEffect, useState} from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Skeleton from '../../componets/skeleton';
import { EClassOthers } from '../../CClassImages';

// Performance
import performance1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance1.webp'
import performance2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance2.webp'
import performance3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance3.webp'
import performance4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance4.webp'

// Design
import design1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design1.webp'
import design2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design2.webp'
import design3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design3.webp'
import design4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design4.webp'

// Luxury
import luxury1  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury1.webp'
import luxury2  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury2.webp'
import luxury3  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury3.webp'
import luxury4  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury4.webp'

// Multimedia
import multimedia1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia1.webp'
import multimedia2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia2.webp'
import multimedia3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia3.webp'
import multimedia4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia4.webp'

// Safety
import safety1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety1.webp'
import safety2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety2.webp'
import safety3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety3.webp'
import safety4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety4.webp'

// Accessories
import accessories1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory1.webp'
import accessories2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory2.webp'
import accessories3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory3.webp'
import accessories4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory4.webp'


const E_ClassSedan = () => {
  const [showPerformanceImages, setShowPerformanceImages] = useState(false);
  const [showDesignImages, setShowDesignImages] = useState(false);
  const [showLuxuryImages, setShowLuxuryImages] = useState(false);
  const [showMultimediaImages, setShowMultimediaImages] = useState(false);
  const [showSafetyImages, setShowSafetyImages] = useState(false);
  const [showAccessoriesImages, setShowAccessoriesImages] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showFeatures2, setShowFeatures2] = useState(false);
  const toggleFeatures = () => setShowFeatures(!showFeatures);
  const toggleFeatures2 = () => setShowFeatures2(!showFeatures2);
  const togglePerformanceImages = () => setShowPerformanceImages(!showPerformanceImages)
  const toggleDesignImages = () => setShowDesignImages(!showDesignImages)
  const toggleLuxuryImages = () => setShowLuxuryImages(!showLuxuryImages)
  const toggleMultimediaImages = () => setShowMultimediaImages(!showMultimediaImages)
  const toggleSafetyImages = () =>  setShowSafetyImages(!showSafetyImages)
  const toggleAccessoriesImages = () =>  setShowAccessoriesImages(!showAccessoriesImages)
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const images = Object.values(EClassOthers);
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
  }, [EClassOthers]);



  return (
    <main className='flex flex-col h-full w-full items-center justify-center pb-20 p-3 overflow-hidden md:mt-[-100px] lg:mt-[-150px]'>
      { imageLoaded ? (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
           <SwiperSlide><img src={EClassOthers.irisBlack} alt="" /></SwiperSlide>
           <SwiperSlide><img src={EClassOthers.irisWhite} alt="" /></SwiperSlide>
           <SwiperSlide><img src={EClassOthers.irisBlue} alt="" /></SwiperSlide>
           <SwiperSlide><img src={EClassOthers.irisSilver} alt="" /></SwiperSlide>
           <SwiperSlide><img src={EClassOthers.irisGray} alt="" /></SwiperSlide>
      </Swiper>
      ) : (
      <div className='flex w-full md:h-[800px] lg:mb-[-100px] h-[400px] justify-center items-center'>
        <Skeleton />
      </div>
    )}


     <div className='flex flex-col gap-2 lg:gap-40 lg:grid lg:grid-cols-2'>
          <div className='flex text-center text-2xl font-medium'>
            <h1>2023-</h1>
            <h1>AMG E 53 Sedan</h1>
          </div>
         <h1 className='text-center text-2xl font-light'>$81,300 * MSRP</h1>
      </div>
       <div className='flex mt-3 border-t max-w-[1200px] border w-full border-gray-300'></div>
      
       <div className='lg:grid-cols-2 lg:grid flex items-center flex-col w-full max-w-[1100px]'>
       <div className='md:max-w-[800px] lg:max-w-[500px] justify-center items-center'>
         <img  src={EClassOthers.E_sedan1} alt="" />
         <img src={EClassOthers.E_sedan2} alt="" />
       </div>
       <div className='flex flex-col md:max-w-[800px] lg:max-w-[460px] lg:mt-[70px] mt-[30px] rounded-md w-full bg-[#f3e6e6] pb-5 p-3'>
         <h1 className='text-center text-xl font-light font-mono'>Feature Highlights</h1>
          <div className='flex flex-col space-y-3 mt-2 p-2 '>
             <div className='flex justify-between'>
                <span className='font-light'>Passenger capacity</span>
                <span className='font-bold'>5</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Power</span>
                <span className='font-bold'>429 hp @ 6,100 rpm</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>City fuel economy</span>
                <span className='font-bold'>21 mpg†</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Highway fuel economy</span>
                <span className='font-bold'>29 mpg†</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Cargo capacity</span>
                <span className='font-bold'>13.1 cu ft</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Engine</span>
                <span className='font-bold'>AMG 3.0L inline-6 turbo</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Transmission</span>
                <span className='font-bold'>AMG SPEEDSHIFT® 9-speed</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Acceleration</span>
                <span className='font-bold'>4.4 sec 0-60 mph **</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Curb weight</span>
                <span className='font-bold'>4,376 lbs</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Wheels</span>
                <span className='font-bold'>19-inch  AMG® twin 5-spoke </span>
             </div>
             <div className='border-b w-full border-black'></div>
            </div>
          </div>
         </div> 

         <div className='flex flex-col justify-center items-center space-y-4 w-full mt-20 max-w-[1200px]'>
          <h1 className='text-2xl'> Essential Characteristics✔️</h1>
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={togglePerformanceImages}>
            <div className='border-b w-full border-black'></div>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Performance</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showPerformanceImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showPerformanceImages && (
              <div className='grid gap-5  grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance1} alt="" />
                    <h1 className='text-center font-bold'>AMG-enhanced 3.0L inline-6 turbo engine with hybrid assist</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance2} alt="" />
                    <h1 className='text-center font-bold'>Hybrid Integrated Starter-Generator</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance3} alt="" />
                    <h1 className='text-center font-bold'>NANOSLIDE cylinder wall technology</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance4} alt="" />
                    <h1 className='text-center font-bold'>ECO Start/Stop system</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleDesignImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Design</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showDesignImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showDesignImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design1} alt="" />
                    <h1 className='text-center font-bold'>The emotion of intelligence</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design2} alt="" />
                    <h1 className='text-center font-bold'>Technology with a human touch</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design3} alt="" />
                    <h1 className='text-center font-bold'>Deletion of decklid badges</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design4} alt="" />
                    <h1 className='text-center font-bold'>Sensual, sculptural cabin design</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleLuxuryImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Luxury</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showLuxuryImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showLuxuryImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury1} alt="" />
                    <h1 className='text-center font-bold'>Power front seats with memory</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury2} alt="" />
                    <h1 className='text-center font-bold'>Active multicontour front seats with massage</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury3} alt="" />
                    <h1 className='text-center font-bold'>Dual-zone automatic climate control</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury4} alt="" />
                    <h1 className='text-center font-bold'>1 year of Mercedes me connect services</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleMultimediaImages}>
            <div className='flex justify-between '>
              <h1 className='font-serif'>Multimedia</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showMultimediaImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showMultimediaImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia1} alt="" />
                    <h1 className='text-center font-bold'>12.3-inch touchscreen multimedia display</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia2} alt="" />
                    <h1 className='text-center font-bold'>12.3-inch digital instrument cluster</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia3} alt="" />
                    <h1 className='text-center font-bold'>Steering wheel with Touch Control Buttons</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia4} alt="" />
                    <h1 className='text-center font-bold'>Mercedes-Benz User Experience (MBUX)</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleSafetyImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Safety</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showSafetyImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showSafetyImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety1} alt="" />
                    <h1 className='text-center font-bold'>Car-to-X Communication</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety2} alt="" />
                    <h1 className='text-center font-bold'>Mercedes-Benz Emergency Call Service</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety3} alt="" />
                    <h1 className='text-center font-bold'>Active Brake Assist</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety4} alt="" />
                    <h1 className='text-center font-bold'>ATTENTION ASSIST</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>
          
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleAccessoriesImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Accessories</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showAccessoriesImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showAccessoriesImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories1} alt="" />
                    <h1 className='text-center font-bold'>Chrome door handle inserts</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories2} alt="" />
                    <h1 className='text-center font-bold'>AMG Crest LED logo projectors</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories3} alt="" />
                    <h1 className='text-center font-bold'>Wheel locking bolts</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories4} alt="" />
                    <h1 className='text-center font-bold'>Comfort Box</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>
        </div>

        <div className='mt-10 flex flex-col'>
          <h1 className='text-2xl text-center font-medium'>Option Packages</h1>
          <div className=' gap-4 flex flex-col lg:grid-cols-2 lg:grid'>
            <div className='mt-10 w-full max-w-[450px] p-2 pb-5  rounded-md'>
             <img src={EClassOthers.irisSilver} alt="" />
               <div className='flex font-bold font-serif justify-between'>
                  <h1>Premium Trim</h1>
                  <h1>Starting at $81,300*</h1>
               </div>
               <div className='mt-3'>
                 <span className='leading-7'>The vehicle comes with luxurious features such as heated power front seats, dual digital displays, ambient lighting in 64 colors, a sunroof, and safety features like Blind Spot Assist and PRE-SAFE®.</span>
               </div>
                <div>
                {showFeatures2 && (
                 <ul className='list-disc ml-7'>
                  <li>Heated front seats</li>
                  <li>40/20/40-split folding rear seats</li>
                  <li>Dual-zone automatic climate control</li>
                  <li>Power tilt/sliding tinted glass sunroof</li>
                  <li>Power-folding side mirrors</li>
                  <li>Power front seats with memory</li>
                  <li>AMG Performance steering wheel in Nappa leather</li>
                  <li>Steering wheel with Touch Control Buttons</li>
                  <li>Illuminated front door sills</li>
                  <li>Mercedes-Benz User Experience (MBUX)</li>
                  <li>11.9-inch touchscreen central multimedia display</li>
                  <li>12.3-inch digital instrument cluster</li>
                  <li>Biometric authentication</li>
                  <li>Wireless Apple CarPlay</li>
                  <li>"Hey, Mercedes" keyword activation</li>
                  <li>FrontBass system</li>
                  <li>Wireless Android Auto</li>
                  <li>Bluetooth audio streaming</li>
                  <li>Hands-free Bluetooth interface</li>
                  <li>HD Radio receiver</li>
                  <li>In-car WiFi</li>
                  <li>USB-C charging port</li>
                  <li>Over-the-air software updates</li>
                  <li>Voice Control with Natural Language Understanding</li>
                  <li>SiriusXM 6-month Platinum Plan trial subscription</li>
                  <li>Electronic trunk closer</li>
                  <li>HANDS-FREE ACCESS</li>
                  <li>Illuminated entry system with logo projectors</li>
                  <li>KEYLESS-GO</li>
                  <li>Remote opening and closing of windows and sunroof</li>
                  <li>Garage door opener</li>
                  <li>Handcrafted AMG 2.0L inline-4 turbo with hybrid assist</li>
                  <li>Electric exhaust-gas turbocharger</li>
                  <li>Hybrid Starter-Generator</li>
                  <li>AMG SPEEDSHIFT MCT 9-speed transmission</li>
                  <li>AMG Performance 4MATIC all-wheel drive</li>
                  <li>AMG DYNAMIC SELECT</li>
                  <li>AMG DRIVE UNIT</li>
                  <li>AMG Sport Exhaust System</li>
                  <li>ECO Start/Stop system</li>
                  <li>4-wheel multilink suspension</li>
                  <li>AMG Sport Suspension with AMG RIDE CONTROL</li>
                  <li>Active rear-wheel steering</li>
                  <li>AMG Sport Braking System</li>
                  <li>3-stage AMG parameter steering</li>
                  <li>ESP Dynamic Cornering Assist</li>
                  <li>LED headlamps and taillamps</li>
                  <li>Adaptive Highbeam Assist</li>
                  <li>LED Daytime Running Lamps</li>
                  <li>Car-to-X Communication</li>
                  <li>Mercedes-Benz Emergency Call Service</li>
                  <li>PRE-SAFE</li>
                  <li>PRE-SAFE Sound</li>
                  <li>Active Brake Assist</li>
                  <li>Rearview camera</li>
                  <li>Surround View System</li>
                  <li>PARKTRONIC with Active Parking Assist</li>
                  <li>Blind Spot Assist with Exit Warning Assist</li>
                  <li>7 air bags</li>
                  <li>Brake Assist (BAS)</li>
                  <li>Electronic Stability Program (ESP)</li>
                  <li>Adaptive braking technology</li>
                  <li>SmartKey with KEYLESS-START</li>
                  <li>Antilock Braking System (ABS)</li>
                  <li>Antitheft alarm system</li>
                  <li>GUARD 360° security system</li>
                  <li>Rain-sensing windshield wipers</li>
                  <li>Heated washer fluid</li>
                  <li>Advanced Tire Pressure Monitoring System</li>
                  <li>4-wheel Electronic Traction System (4-ETS)</li>
                  <li>Rear side-impact air bags</li>
                  <li>ATTENTION ASSIST</li>
                  </ul>)}
                </div>
                <div onClick={toggleFeatures2} className='flex text-white justify-between mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures2 ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures2 ? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                </div>
             </div>

               <div className='mt-10 w-full max-w-[450px] p-2 pb-5 rounded-md'>
                  <img src={EClassOthers.irisBlue} alt="" />
                 <div className='flex font-bold font-serif justify-between'>
                    <h1>Pinnacle Trim</h1>
                    <h1>Starting at $89,900*</h1>
                 </div>
                 <div className='mt-3'>
                   <span className=' leading-7'>Innovative technology includes MB Navigation featuring augmented video, Burmester® 3D Surround Sound, and an AMG Head-Up Display, offering an enhanced and immersive driving experience.</span>
                 </div>
                  <div>
                   {showFeatures && (
                    <ul className='list-disc ml-7'>
                      <li>Power front seats with memory</li>
                      <li>Heated front seats</li>
                      <li>40/20/40-split folding rear seats</li>
                      <li>Dual-zone automatic climate control</li>
                      <li>Power tilt/sliding tinted glass sunroof</li>
                      <li>Power-folding side mirrors</li>
                      <li>AMG Performance steering wheel in Nappa leather</li>
                      <li>Steering wheel with Touch Control Buttons</li>
                      <li>Enhanced ambient lighting</li>
                      <li>Illuminated front door sills</li>
                      <li>Mercedes-Benz User Experience (MBUX)</li>
                      <li>11.9-inch touchscreen central multimedia display</li>
                      <li>12.3-inch digital instrument cluster</li>
                      <li>Biometric authentication</li>
                      <li>"Hey, Mercedes" keyword activation</li>
                      <li>Wireless Android Auto</li>
                      <li>Wireless Apple CarPlay</li>
                      <li>MB Navigation</li>
                      <li>MBUX Augmented Video for Navigation</li>
                      <li>No-charge online navigation map updates for 1 year</li>
                      <li>1 year of Live Traffic Information</li>
                      <li>Burmester 3D Surround Sound System</li>
                      <li>Dolby Atmos</li>
                      <li>Bluetooth audio streaming</li>
                      <li>FrontBass system</li>
                      <li>Hands-free Bluetooth interface</li>
                      <li>HD Radio receiver</li>
                      <li>In-car WiFi</li>
                      <li>USB-C charging port</li>
                      <li>Over-the-air software updates</li>
                      <li>Voice Control with Natural Language Understanding</li>
                      <li>Front-cabin wireless charging with NFC pairing</li>
                      <li>Online Music Streaming</li>
                      <li>SiriusXM 6-month Platinum Plan trial subscription</li>
                      <li>AMG Head-Up Display</li>
                      <li>Electronic trunk closer</li>
                      <li>HANDS-FREE ACCESS</li>
                      <li>Illuminated entry system with logo projectors</li>
                      <li>KEYLESS-GO</li>
                      <li>Remote opening and closing of windows and sunroof</li>
                      <li>Garage door opener</li>
                      <li>Handcrafted AMG 2.0L inline-4 turbo with hybrid assist</li>
                      <li>Electric exhaust-gas turbocharger</li>
                      <li>Hybrid Starter-Generator</li>
                      <li>AMG SPEEDSHIFT MCT 9-speed transmission</li>
                      <li>AMG Performance 4MATIC all-wheel drive</li>
                      <li>AMG DYNAMIC SELECT</li>
                      <li>AMG DRIVE UNIT</li>
                      <li>AMG Sport Exhaust System</li>
                      <li>ECO Start/Stop system</li>
                      <li>4-wheel multilink suspension</li>
                      <li>AMG Sport Suspension with AMG RIDE CONTROL</li>
                      <li>Active rear-wheel steering</li>
                      <li>AMG Sport Braking System</li>
                      <li>3-stage AMG parameter steering</li>
                      <li>ESP Dynamic Cornering Assist</li>
                      <li>LED headlamps and taillamps</li>
                      <li>Adaptive Highbeam Assist</li>
                      <li>LED Daytime Running Lamps</li>
                      <li>Car-to-X Communication</li>
                      <li>Mercedes-Benz Emergency Call Service</li>
                      <li>PRE-SAFE</li>
                      <li>PRE-SAFE Sound</li>
                      <li>Active Brake Assist</li>
                      <li>Rearview camera</li>
                      <li>Surround View System</li>
                      <li>PARKTRONIC with Active Parking Assist</li>
                      <li>Blind Spot Assist with Exit Warning Assist</li>
                      <li>7 air bags</li>
                      <li>Brake Assist (BAS)</li>
                      <li>Electronic Stability Program (ESP)</li>
                      <li>Adaptive braking technology</li>
                      <li>SmartKey with KEYLESS-START</li>
                      <li>Antilock Braking System (ABS)</li>
                      <li>Antitheft alarm system</li>
                      <li>GUARD 360° security system</li>
                      <li>Rain-sensing windshield wipers</li>
                      <li>Heated washer fluid</li>
                      <li>Advanced Tire Pressure Monitoring System</li>
                      <li>4-wheel Electronic Traction System (4-ETS)</li>
                      <li>Rear side-impact air bags</li>
                      <li>ATTENTION ASSIST</li>
                    </ul>)}
                  </div>
                  <div onClick={toggleFeatures} className='flex text-white justify-between mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                 </div>
               </div>
             </div>
          </div>
     </main>
  )
}



export default E_ClassSedan