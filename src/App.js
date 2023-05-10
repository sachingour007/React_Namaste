import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import RestaurantBody from './component/RestaurantBody';
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
   <div className='main'>
   <Header />

   {/* OutLet */}
   <Outlet />

   

   </div>
  )
}

export default App