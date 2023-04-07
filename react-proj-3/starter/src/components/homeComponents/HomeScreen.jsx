import React, {useEffect, useState, useRef} from 'react'
import AdBanner from './AdBanner'
import RecipeCard from './RecipeCard'
import {ImSearch} from "react-icons/im";
import classes from './HomeScreen.module.css';

const HomeScreen = () => {  

  const [recipes,setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    console.log('oh..no')
    getRecipes()
  },[])

  const changeHandler = () => {
    setSearch(ref.current.value)
  }
  console.log(search)

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

  const filteredArr = recipes.filter(recipe => {
    let lowerRecipe = recipe.recipe_name.toLowerCase()
    let lowerState = search.toLowerCase()
    if(lowerRecipe.includes(lowerState)){
      return recipe
    }
  })
  const listOfRecipes = filteredArr.map(recipe => <RecipeCard recipe={recipe}/>)


  return (
    <div style={{display:'flex',
    flexDirection: 'column', alignItems: 'center'}}>
      <AdBanner/>
      <form className={classes.search} onClick={()=>ref.current.focus()}>
        <ImSearch></ImSearch>
        <input ref={ref} onChange={changeHandler} type="text" className={classes.input} placeholder='ex. Cake, Steak, Easy-Bake...'/>
      </form>
      <div className={classes.listed}>
      {listOfRecipes}
      </div>
    </div>
  )
}



export default HomeScreen