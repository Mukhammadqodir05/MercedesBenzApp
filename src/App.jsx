import React from 'react'
import Navbar from './componets/navbar'
import Home from './componets/home'
import Sedans_wagons from './componets/sedans_wagons'
import SUVs from './componets/sUVs'
import ConvertiblesRoadsters from './componets/convertiblesRoadsters'

const App = () => {
  return (
  <main className='text-white'> 
     <Navbar />
     {/* <Home /> */}
     <Sedans_wagons/>
     <SUVs />
     <ConvertiblesRoadsters />
  </main>
  )
}

export default App