import React from 'react'
import Search from './Search'
import RestaurantCards from './RestaurantCards'
import style from './ResBody.module.css'

const RestaurantBody = () => {
  return (
    <div className={style.main_body}>
      <Search />
      <div className={style.cards}>
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      <RestaurantCards />
      </div>
    </div>
  )
}

export default RestaurantBody