import React from "react";
import classes from "./RecipeCard.module.css";

const RecipeCard = (props) => {
  return (
      <div key={props.recipe.recipe_id} className={classes.card}>
        <img
          className={classes.img}
          src={props.recipe.image_url}
          alt=""
        />
        <h3 className={classes.title}>{props.recipe.recipe_name}</h3>
        <button className={classes.btn}>See More</button>
      </div>
  );
};

export default RecipeCard;
