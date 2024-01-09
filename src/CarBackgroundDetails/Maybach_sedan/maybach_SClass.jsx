import React, {useState} from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

import irisBlack from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisBlack.png'
import irisBlackMetallic from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisBlackMetallic.png'
import irisBlue from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisBlue.png'
import irisGold from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisGold.png'
import irisGreyMetallic from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisGreyMetallic.png'
import irisMetallic from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisMetallic.png'
import irisNight from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisNight.png'
import irisOlive from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisOlive.png'
import irisRed from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisRed.png'
import irisRedMetallic from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/irisRedMetallic.png'
import Maybach1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/Maybach1.webp'
import Maybach2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/Maybach2.webp'


// Performance
import performance1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/performance/performance1.webp'
import performance2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/performance/performance2.webp'
import performance3 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/performance/performance3.webp'
import performance4 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/performance/performance4.webp'

// Design
import design1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/design/design1.webp'
import design2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/design/design2.webp'
import design3 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/design/design3.webp'
import design4 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/design/design4.webp'

// Safety
import safety1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/safety/safety1.webp'
import safety2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/safety/safety2.webp'
import safety3 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/safety/safety3.webp'
import safety4 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/safety/safety4.webp'

// Media
import multimedia1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/media/multimedia1.webp'
import multimedia2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/media/multimedia2.webp'
import multimedia3 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/media/multimedia3.webp'
import multimedia4 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/media/multimedia4.webp'

// Luxury
import luxury1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/luxury/luxury1.webp'
import luxury2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/luxury/luxury2.webp'
import luxury3 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/luxury/luxury3.webp'
import luxury4 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/luxury/luxury4.webp'

// Accessories
import accessory1 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/accesssories/accessory1.webp'
import accessory2 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/accesssories/accessory2.webp'
import accessory3 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/accesssories/accessory3.webp'
import accessory4 from '/src/CarBackgroundDetails/Maybach_sedan/maybachImages/accesssories/accessory4.webp'



const Maybach_SClass = () => {
  const [showPerformanceImages, setShowPerformanceImages] = useState(false);
  const [showDesignImages, setShowDesignImages] = useState(false);
  const [showLuxuryImages, setShowLuxuryImages] = useState(false);
  const [showMultimediaImages, setShowMultimediaImages] = useState(false);
  const [showSafetyImages, setShowSafetyImages] = useState(false);
  const [showAccessoriesImages, setShowAccessoriesImages] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showFeatures2, setShowFeatures2] = useState(false);
  const [showFeatures3, setShowFeatures3] = useState(false);

  const toggleFeatures = () => setShowFeatures(!showFeatures);
  const toggleFeatures2 = () => setShowFeatures2(!showFeatures2);
  const toggleFeatures3 = () => setShowFeatures3(!showFeatures3);
  const togglePerformanceImages = () => setShowPerformanceImages(!showPerformanceImages)
  const toggleDesignImages = () => setShowDesignImages(!showDesignImages)
  const toggleLuxuryImages = () => setShowLuxuryImages(!showLuxuryImages)
  const toggleMultimediaImages = () => setShowMultimediaImages(!showMultimediaImages)
  const toggleSafetyImages = () =>  setShowSafetyImages(!showSafetyImages)
  const toggleAccessoriesImages = () =>  setShowAccessoriesImages(!showAccessoriesImages)



  return (
    <main className='flex flex-col h-full w-full items-center justify-center pb-20 p-3 overflow-hidden lg:mt-[-200px]'>
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
            <SwiperSlide><img src={irisBlack} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisBlue} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisBlackMetallic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisGold} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisGreyMetallic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisRed} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisRedMetallic} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisNight} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisOlive} alt="" /></SwiperSlide>
            <SwiperSlide><img src={irisMetallic} alt="" /></SwiperSlide>
          </Swiper>
          
          <div className='flex flex-col  gap-2 lg:gap-40 md:grid md:grid-cols-2'>
              <div className='flex text-center text-2xl font-medium'>
                <h1>2023-</h1>
                <h1>Maybach S 680 4MATIC</h1>
              </div>
            <h1 className='text-center text-2xl font-light'>$230,000 * MSRP</h1>
          </div>
          <div className='flex mt-3 border-t max-w-[1200px] border w-full border-gray-300'></div>
          
          <div className='lg:grid-cols-2 lg:grid flex items-center flex-col w-full max-w-[1100px]'>
            <div className='md:max-w-[800px] lg:max-w-[500px] justify-center items-center'>
              <img  src={Maybach1} alt="" />
              <img src={Maybach2} alt="" />
            </div>
            <div className='flex flex-col md:max-w-[800px] lg:max-w-[460px] lg:mt-[70px] mt-[30px] rounded-md w-full bg-[#f3e6e6] pb-5 p-3'>
              <h1 className='text-center text-xl font-light font-mono'>Key Features</h1>
                <div className='flex flex-col space-y-3 mt-2 p-2 '>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Passenger capacity</span>
                      <span className='font-bold'>5</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Power</span>
                      <span className='font-bold'>621 hp @ 5,250-5,500 rpm</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Cargo capacity</span>
                      <span className='font-bold'>12.3 cu ft</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Engine</span>
                      <span className='font-bold'>Handcrafted 6.0L V12 biturbo</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Auto transmission</span>
                      <span className='font-bold'>9G-TRONIC 9-speed</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Acceleration</span>
                      <span className='font-bold'>4.5 sec 0-60 mph**</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Curb weight</span>
                      <span className='font-bold'>5,346 lbs</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Wheels</span>
                      <span className='font-bold'>20-inch Maybach Exclusive</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>City fuel economy</span>
                      <span className='font-bold'>12 mpg †</span>
                  </div>
                  <div className='border-b w-full border-black'></div>
                  <div className='flex justify-between gap-4'>
                      <span className='font-light'>Highway fuel economy</span>
                      <span className='font-bold'>20 mpg†</span>
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
                        <h1 className='text-center font-bold'>Handcrafted 6.0L V12 biturbo engine</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={performance2} alt="" />
                        <h1 className='text-center font-bold'>ECO Start/Stop system</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={performance3} alt="" />
                        <h1 className='text-center font-bold'>9G-TRONIC automatic transmission</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={performance4} alt="" />
                        <h1 className='text-center font-bold'>4MATIC fully variable all-wheel drive</h1>
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
                        <h1 className='text-center font-bold'>Maybach grille and V12 details</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={design2} alt="" />
                        <h1 className='text-center font-bold'>All-LED exterior lighting</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={design3} alt="" />
                        <h1 className='text-center font-bold'>All-LED interior lighting</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={design4} alt="" />
                        <h1 className='text-center font-bold'>20-inch Maybach Exclusive forged</h1>
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
                        <h1 className='text-center font-bold'>Heated 12-way power front seats with memory</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={luxury2} alt="" />
                        <h1 className='text-center font-bold'>ENERGIZING kinetics for front seats</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={luxury3} alt="" />
                        <h1 className='text-center font-bold'>Active multicontour front seats with massage</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={luxury4} alt="" />
                        <h1 className='text-center font-bold'>Ventilated front seats</h1>
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
                        <h1 className='text-center font-bold'>12.8-inch OLED touchscreen central multimedia display</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={multimedia2} alt="" />
                        <h1 className='text-center font-bold'>12.3-inch digital instrument cluster</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={multimedia3} alt="" />
                        <h1 className='text-center font-bold'>3D instrument cluster</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={multimedia4} alt="" />
                        <h1 className='text-center font-bold'>Steering wheel with Touch Control Buttons</h1>
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
                        <h1 className='text-center font-bold'>Active Brake Assist</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={safety3} alt="" />
                        <h1 className='text-center font-bold'>Mercedes-Benz Emergency Call</h1>
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
                        <img className='rounded-md' src={accessory1} alt="" />
                        <h1 className='text-center font-bold'>Body-color rear spoiler</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={accessory2} alt="" />
                        <h1 className='text-center font-bold'>Black rear spoiler</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='rounded-md' src={accessory3} alt="" />
                        <h1 className='text-center font-bold'>Wheel locking bolts</h1>
                    </div> <div className='space-y-2'>
                        <img className='rounded-md' src={accessory4} alt="" />
                        <h1 className='text-center font-bold'>Comfort box</h1>
                    </div>
                  </div>
                )}
                <div className='border-b w-full border-black'></div>
              </div>
           </div>
             
           <div className='mt-10 flex flex-col max-w-[1200px]'>
           <h1 className='text-2xl text-center font-medium'>Option Packages</h1>
           <div className=' gap-4 flex flex-col lg:grid-cols-3 lg:grid'>
            <div className='mt-10 w-full max-w-[450px] p-2 pb-5 lg:max-w-[400px] rounded-md'>
             <img src={irisMetallic} alt="" />
               <div className='flex font-bold font-serif justify-between'>
                  <h1>Premium Trim</h1>
                  <h1>Starting at $230,000*</h1>
               </div>
               <div className='mt-3'>
                 <span className='leading-7'>The car comes with a range of luxurious features as standard, such as a high-quality Burmester® surround sound system, customizable 64-color ambient lighting, a large Panorama roof, and advanced driver assistance technology.</span>
               </div>
                <div>
                {showFeatures2 && (
                 <ul className='list-disc ml-7'>
                     <li>Multicontour front seats with massage</li>
                     <li>Rapid-heating front seats</li>
                     <li>Heated steering wheel</li>
                     <li>Active ambient lighting</li>
                     <li>Heated power front seats with memory</li>
                     <li>Ventilated front seats</li>
                     <li>Heated rear seats</li>
                     <li>Panorama roof</li>
                     <li>Dual-zone automatic climate control</li>
                     <li>Pre-entry climate control</li>
                     <li>Steering wheel with Touch Control Buttons</li>
                     <li>AMG Performance steering wheel in Nappa leather</li>
                     <li>AMG DRIVE UNIT</li>
                     <li>MBUX Hyperscreen</li>
                     <li>Mercedes-Benz User Experience (MBUX)</li>
                     <li>“Hey, Mercedes” keyword activation</li>
                     <li>Voice Control with Natural Language Understanding</li>
                     <li>Biometric authentication</li>
                     <li>12.3-inch digital instrument cluster</li>
                     <li>12.3-inch OLED front passenger display</li>
                     <li>MB Navigation with Electric Intelligence</li>
                     <li>Route-based Speed Adaptation</li>
                     <li>MBUX Augmented Video for Navigation</li>
                     <li>No-charge online navigation map updates for 1 year</li>
                     <li>Over-the-air software updates</li>
                     <li>MBUX Augmented Reality AMG Head-Up Display</li>
                     <li>Front-cabin wireless charging</li>
                     <li>Burmester 3D Surround Sound system w/EV Sound</li>
                     <li>SiriusXM 6-month Platinum Plan trial subscription</li>
                     <li>HD Radio receiver</li>
                     <li>Wireless Apple CarPlay</li>
                     <li>Wireless Android Auto</li>
                     <li>Online Music Streaming</li>
                     <li>Bluetooth audio streaming</li>
                     <li>Hands-free Bluetooth interface</li>
                     <li>Six 100W USB-C charging ports</li>
                     <li>AMG SOUND EXPERIENCE</li>
                     <li>64-color LED ambient lighting</li>
                     <li>Illuminated door sills</li>
                     <li>LED logo projectors</li>
                     <li>Power-folding side mirrors</li>
                     <li>KEYLESS-GO with seamless door handles</li>
                     <li>Electronic liftgate closer</li>
                     <li>HANDS-FREE ACCESS</li>
                     <li>Illuminated entry system</li>
                     <li>Garage door opener</li>
                     <li>Dual AMG-specific electric motors with boost function</li>
                     <li>AMG Performance 4MATIC+ all-wheel drive</li>
                     <li>Intelligent Energy Recovery with paddles</li>
                     <li>AMG DYNAMIC SELECT</li>
                     <li>AMG DRIVE UNIT</li>
                     <li>AMG DYNAMIC PLUS Package</li>
                     <li>Advanced 108.4-kWh EV battery</li>
                     <li>Multiple charging options</li>
                     <li>AMG RIDE CONTROL+ air suspension</li>
                     <li>9-degree rear axle steering</li>
                     <li>AMG high-performance compound brake system</li>
                     <li>Car-to-X Communication</li>
                     <li>PRE-SAFE</li>
                     <li>PRE-SAFE Sound</li>
                     <li>PRE-SAFE PLUS</li>
                     <li>PRE-SAFE Impulse Side</li>
                     <li>LED DIGITAL LIGHT headlamps w/lightband</li>
                     <li>Adaptive Highbeam Assist</li>
                     <li>ATTENTION ASSIST</li>
                     <li>PARKTRONIC with Active Parking Assist</li>
                     <li>Active Distance Assist DISTRONIC</li>
                     <li>Evasive Steering Assist</li>
                     <li>Active Brake Assist with Cross-Traffic Function</li>
                     <li>Front and Rear Cross-Traffic Alert w/pedestrian detection and automatic braking</li>
                     <li>Acoustic Vehicle Alert System</li>
                     <li>Active Emergency Stop Assist</li>
                     <li>Active Speed Limit Assist</li>
                     <li>Active Lane Change Assist</li>
                     <li>Extended Restart in Stop-and-Go Traffic</li>
                     <li>Active Stop-and-Go Assist</li>
                     <li>Adaptive braking technology</li>
                     <li>7 air bags</li>
                     <li>Antitheft alarm system</li>
                     <li>GUARD 360° security system</li>
                     <li>Active Brake</li>
                     <li>Mercedes-Benz Emergency Call</li>
                     <li>Surround View System</li>
                     <li>Active Steering Assist</li>
                     <li>Active Blind Spot Assist</li>
                     <li>Exit Warning Assist</li>
                     <li>Active Lane Keeping Assist</li>
                     <li>SmartKey with KEYLESS-START</li>
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

               <div className='mt-10 w-full max-w-[450px] lg:max-w-[400] p-2 pb-5 rounded-md'>
                  <img src={irisGold} alt="" />
                 <div className='flex font-bold font-serif justify-between'>
                    <h1>Exclusive Trim</h1>
                    <h1>Starting at $241,000*</h1>
                 </div>
                 <div className='mt-3'>
                   <span className=' leading-7'> the car offers 4-zone climate control, which is a thoughtful luxury feature.</span>
                 </div>
                  <div>
                   {showFeatures && (
                    <ul className='list-disc ml-7'>
                     <li>Heated steering wheel</li>
                     <li>Active ambient lighting</li>
                     <li>Multicontour front seats with massage</li>
                     <li>Rapid-heating front seats</li>
                     <li>Heated power front seats with memory</li>
                     <li>Ventilated front seats</li>
                     <li>Heated rear seats</li>
                     <li>Panorama roof</li>
                     <li>Pre-entry climate control</li>
                     <li>4-zone automatic climate control</li>
                     <li>Steering wheel with Touch Control Buttons</li>
                     <li>AMG Performance steering wheel in Nappa leather</li>
                     <li>AMG DRIVE UNIT</li>
                     <li>MBUX Hyperscreen</li>
                     <li>Mercedes-Benz User Experience (MBUX)</li>
                     <li>“Hey, Mercedes” keyword activation</li>
                     <li>Voice Control with Natural Language Understanding</li>
                     <li>Biometric authentication</li>
                     <li>12.3-inch digital instrument cluster</li>
                     <li>12.3-inch OLED front passenger display</li>
                     <li>MB Navigation with Electric Intelligence</li>
                     <li>Route-based Speed Adaptation</li>
                     <li>MBUX Augmented Video for Navigation</li>
                     <li>No-charge online navigation map updates for 1 year</li>
                     <li>Over-the-air software updates</li>
                     <li>MBUX Augmented Reality AMG Head-Up Display</li>
                     <li>Front-cabin wireless charging</li>
                     <li>Burmester 3D Surround Sound system w/EV Sound</li>
                     <li>SiriusXM 6-month Platinum Plan trial subscription</li>
                     <li>HD Radio receiver</li>
                     <li>Wireless Apple CarPlay</li>
                     <li>Wireless Android Auto</li>
                     <li>Online Music Streaming</li>
                     <li>Bluetooth audio streaming</li>
                     <li>Hands-free Bluetooth interface</li>
                     <li>Six 100W USB-C charging ports</li>
                     <li>AMG SOUND EXPERIENCE</li>
                     <li>64-color LED ambient lighting</li>
                     <li>Illuminated door sills</li>
                     <li>LED logo projectors</li>
                     <li>Power-folding side mirrors</li>
                     <li>KEYLESS-GO with seamless door handles</li>
                     <li>Electronic liftgate closer</li>
                     <li>HANDS-FREE ACCESS</li>
                     <li>Illuminated entry system</li>
                     <li>Garage door opener</li>
                     <li>Dual AMG-specific electric motors with boost function</li>
                     <li>AMG Performance 4MATIC+ all-wheel drive</li>
                     <li>Intelligent Energy Recovery with paddles</li>
                     <li>AMG DYNAMIC SELECT</li>
                     <li>AMG DRIVE UNIT</li>
                     <li>AMG DYNAMIC PLUS Package</li>
                     <li>Advanced 108.4-kWh EV battery</li>
                     <li>Multiple charging options</li>
                     <li>AMG RIDE CONTROL+ air suspension</li>
                     <li>9-degree rear axle steering</li>
                     <li>AMG high-performance compound brake system</li>
                     <li>Car-to-X Communication</li>
                     <li>PRE-SAFE</li>
                     <li>PRE-SAFE Sound</li>
                     <li>PRE-SAFE PLUS</li>
                     <li>PRE-SAFE Impulse Side</li>
                     <li>LED DIGITAL LIGHT headlamps w/lightband</li>
                     <li>Adaptive Highbeam Assist</li>
                     <li>ATTENTION ASSIST</li>
                     <li>Active Brake Assist</li>
                     <li>Mercedes-Benz Emergency Call</li>
                     <li>Surround View System</li>
                     <li>PARKTRONIC with Active Parking Assist</li>
                     <li>Active Distance Assist DISTRONIC</li>
                     <li>Active Steering Assist</li>
                     <li>Evasive Steering Assist</li>
                     <li>Active Brake Assist with Cross-Traffic Function</li>
                     <li>Front and Rear Cross-Traffic Alert w/pedestrian detection and automatic braking</li>
                     <li>Acoustic Vehicle Alert System</li>
                     <li>Active Emergency Stop Assist</li>
                     <li>Active Speed Limit Assist</li>
                     <li>Active Blind Spot Assist</li>
                     <li>Exit Warning Assist</li>
                     <li>Active Lane Keeping Assist</li>
                     <li>Active Lane Change Assist</li>
                     <li>Extended Restart in Stop-and-Go Traffic</li>
                     <li>Active Stop-and-Go Assist</li>
                     <li>Adaptive braking technology</li>
                     <li>7 air bags</li>
                     <li>Rear side-impact air bags</li>
                     <li>Antitheft alarm system</li>
                     <li>GUARD 360° security system</li>
                     <li>SmartKey with KEYLESS-START</li>
                   </ul>)}
                  </div>
                  <div onClick={toggleFeatures} className='flex lg:mt-[93px]  text-white justify-between mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                 </div>
               </div>

               <div className='mt-10 w-full max-w-[450px] p-2 pb-5 lg:max-w-[400]   rounded-md'>
                <img src={irisNight} alt="" />
               <div className='flex font-bold font-serif justify-between'>
                  <h1>Pinnacle Trim</h1>
                  <h1>Starting at $255,000*</h1>
               </div>
               <div className='mt-3'>
                 <span className='leading-7'>The rear cabin offers luxurious amenities such as heated and ventilated power seats, wireless charging, and other innovative features for ultimate comfort and convenience.</span>
               </div>
                <div>
                {showFeatures3 && (
                <ul className='list-disc ml-7'>
                  <li>Heated front seats</li>
                  <li>Multicontour front seats with massage</li>
                  <li>Rapid-heating front seats</li>
                  <li>Active ambient lighting</li>
                  <li>Heated steering wheel</li>
                  <li>Heated power front seats with memory</li>
                  <li>Ventilated front seats</li>
                  <li>Heated and ventilated rear seats</li>
                  <li>Power outboard rear seats</li>
                  <li>Luxury rear head restraints</li>
                  <li>Panorama roof</li>
                  <li>Pre-entry climate control</li>
                  <li>4-zone automatic climate control</li>
                  <li>Steering wheel with Touch Control Buttons</li>
                  <li>AMG Performance steering wheel in Nappa leather</li>
                  <li>AMG DRIVE UNIT</li>
                  <li>MBUX Hyperscreen</li>
                  <li>Mercedes-Benz User Experience (MBUX)</li>
                  <li>“Hey, Mercedes” keyword activation</li>
                  <li>Voice Control with Natural Language Understanding</li>
                  <li>Biometric authentication</li>
                  <li>12.3-inch digital instrument cluster</li>
                  <li>12.3-inch OLED front passenger display</li>
                  <li>MB Navigation with Electric Intelligence</li>
                  <li>Route-based Speed Adaptation</li>
                  <li>MBUX Augmented Video for Navigation</li>
                  <li>No-charge online navigation map updates for 1 year</li>
                  <li>Rear-cabin wireless charging</li>
                  <li>Burmester 3D Surround Sound system w/EV Sound</li>
                  <li>SiriusXM 6-month Platinum Plan trial subscription</li>
                  <li>HD Radio receiver</li>
                  <li>Wireless Apple CarPlay</li>
                  <li>Wireless Android Auto</li>
                  <li>Online Music Streaming</li>
                  <li>Bluetooth audio streaming</li>
                  <li>Hands-free Bluetooth interface</li>
                  <li>Six 100W USB-C charging ports</li>
                  <li>Over-the-air software updates</li>
                  <li>64-color LED ambient lighting</li>
                  <li>Illuminated door sills</li>
                  <li>LED logo projectors</li>
                  <li>Power-folding side mirrors</li>
                  <li>KEYLESS-GO with seamless door handles</li>
                  <li>Electronic liftgate closer</li>
                  <li>HANDS-FREE ACCESS</li>
                  <li>MBUX Augmented Reality AMG Head-Up Display</li>
                  <li>Front-cabin wireless charging</li>
                  <li>AMG SOUND EXPERIENCE</li>
                  <li>Comfort-type rear center armrest</li>
                  <li>Illuminated entry system</li>
                  <li>Garage door opener</li>
                  <li>Dual AMG-specific electric motors with boost function</li>
                  <li>Advanced 108.4-kWh EV battery</li>
                  <li>AMG RIDE CONTROL+ air suspension</li>
                  <li>9-degree rear axle steering</li>
                  <li>AMG high-performance compound brake system</li>
                  <li>Car-to-X Communication</li>
                  <li>PRE-SAFE</li>
                  <li>PRE-SAFE Sound</li>
                  <li>PRE-SAFE PLUS</li>
                  <li>PRE-SAFE Impulse Side</li>
                  <li>LED DIGITAL LIGHT headlamps w/lightband</li>
                  <li>Adaptive Highbeam Assist</li>
                  <li>ATTENTION ASSIST</li>
                  <li>Mercedes-Benz Emergency Call</li>
                  <li>Active Brake Assist</li>
                  <li>Exit Warning Assist</li>
                  <li>PARKTRONIC with Active Parking Assist</li>
                  <li>Active Distance Assist DISTRONIC</li>
                  <li>Surround View System</li>
                  <li>Evasive Steering Assist</li>
                  <li>Active Brake Assist with Cross-Traffic Function</li>
                  <li>Front and Rear Cross-Traffic Alert w/pedestrian detection and automatic braking</li>
                  <li>Acoustic Vehicle Alert System</li>
                  <li>Active Emergency Stop Assist</li>
                  <li>Active Speed Limit Assist</li>
                  <li>Active Steering Assist</li>
                  <li>Active Blind Spot Assist</li>
                  <li>Active Lane Keeping Assist</li>
                  <li>Active Lane Change Assist</li>
                  <li>Extended Restart in Stop-and-Go Traffic</li>
                  <li>Active Stop-and-Go Assist</li>
                  <li>Adaptive braking technology</li>
                  <li>7 air bags</li>
                  <li>Rear side-impact air bags</li>
                  <li>SmartKey with KEYLESS-START</li>
                  <li>AMG Performance 4MATIC+ all-wheel drive</li>
                  <li>Intelligent Energy Recovery with paddles</li>
                  <li>AMG DYNAMIC SELECT</li>
                  <li>AMG DRIVE UNIT</li>
                  <li>AMG DYNAMIC PLUS Package</li>
                  <li>Advanced 108.4-kWh EV battery</li>
                  <li>Multiple charging options</li>
                  <li>Antitheft alarm system</li>
                  <li>GUARD 360° security system</li>
                  </ul>)}
                </div>
                <div onClick={toggleFeatures3} className='flex text-white justify-between lg:mt-[37px] mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures3 ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures3 ? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                  </div>
                </div>
            </div>
         </div>
    </main>
  )
}

export default Maybach_SClass