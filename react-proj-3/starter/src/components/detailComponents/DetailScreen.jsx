import React, { useEffect, useState } from "react";
import style from "./DetailScreen.module.css";
import classes from "../homeComponents/AdBanner.module.css";
import salmon from "../../assets/salmon.jpg";
import { useParams } from "react-router-dom";

const DetailScreen = () => {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();
  useEffect(() => {
    recipeData();
    console.log(recipe);
  }, []);

  const recipeData = async () => {
    const response = await fetch(
      `https://recipes.devmountain.com/recipes/${id}`
    );
    const data = await response.json();
    console.log(data);
    setRecipe(data);
  };

  let banner = (
    <div
      style={{
        background: `linear-gradient(
        190deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)),
        url(${recipe.image_url})
         no-repeat center center/cover`,
      }}
      className={classes.FoodPic}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>{recipe.recipe_name}</h1>
      </div>
    </div>
  );

  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {banner}
      <div className={style.container}>
        <div className={style.requirements}>
          <h3>Recipe</h3>
          <div className={style.recipe}>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.servers}</p>
          </div>
          <h3>Ingredients</h3>
          <div className={style.ingredients}>
            {recipe.ingredients &&
              recipe.ingredients.map((ing, index) => {
                return (
                  <h4>
                    {ing.quantity} {ing.ingredient}
                  </h4>
                );
              })}
          </div>
        </div>
        <div className={style.instructions}>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
