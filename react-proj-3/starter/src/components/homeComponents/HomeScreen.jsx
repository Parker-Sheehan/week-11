import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'

const HomeScreen = () => {  

  const [recipes,setRecipes] = useState([])

  useEffect(() => {
    console.log('oh..no')
    getRecipes()
  },[])

  const getRecipes = async () => {
    const response = await fetch("https://recipes.devmountain.com/recipes")
    const data = await response.json()
  
    if (!response.ok){
      throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
        status: 500,
      });
    } else {
      setRecipes(data)
      console.log(data)
    }
  }

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}



export default HomeScreen