import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import RestaurantBody from './component/RestaurantBody';
import {Outlet} from 'react-router-dom'
import Home from './component/Home';

const App = () => {
  return (
   <div className='main'>
   <Header />
   <Home/>

   {/* OutLet */}
   {/* <Outlet /> */}

   

   </div>
  )
}

export default App