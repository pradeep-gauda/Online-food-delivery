import React, {useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {
const[category, setCategory]= useState("All") 

  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </>
  )
}

export default Home