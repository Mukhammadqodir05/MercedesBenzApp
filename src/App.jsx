import React from 'react'
import Navbar from './componets/navbar'
import Home from './componets/home'
import Sedans_wagons from './componets/sedans_wagons'
import SUVs from './componets/sUVs'
import ConvertiblesRoadsters from './componets/convertiblesRoadsters'
import Suv from './componets/suv'

const App = () => {
  return (
  <main className='text-white'> 
     <Navbar />
     {/* <Home /> */}
     {/* <Sedans_wagons/>
     <SUVs />
     <ConvertiblesRoadsters /> */}
     <Suv />
  </main>
  )
}

export default App