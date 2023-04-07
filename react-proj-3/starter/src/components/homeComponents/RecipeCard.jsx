import React from "react";
import classes from "./RecipeCard.module.css";

const RecipeCard = () => {
  return (
    <div className={classes.listed}>
      <div className={classes.card}>
        <img
          className={classes.img}
          src="https://img.taste.com.au/3vSWftg2/taste/2016/11/melt-and-mix-triple-choc-layer-cake-98301-1.jpeg"
          alt=""
        />
        <h3 className={classes.title}>Triple Chocolate Mousse Cake</h3>
        <button className={classes.btn}>See More</button>
      </div>
      <div className={classes.card}>
        <img
          className={classes.img}
          src="https://img.taste.com.au/3vSWftg2/taste/2016/11/melt-and-mix-triple-choc-layer-cake-98301-1.jpeg"
          alt=""
        />
        <h3 className={classes.title}>Triple Chocolate Mousse Cake</h3>
        <button className={classes.btn}>See More</button>
      </div>
      <div className={classes.card}>
        <img
          className={classes.img}
          src="https://img.taste.com.au/3vSWftg2/taste/2016/11/melt-and-mix-triple-choc-layer-cake-98301-1.jpeg"
          alt=""
        />
        <h3 className={classes.title}>Triple Chocolate Mousse Cake</h3>
        <button className={classes.btn}>See More</button>
      </div>
      <div className={classes.card}>
        <img
          className={classes.img}
          src="https://img.taste.com.au/3vSWftg2/taste/2016/11/melt-and-mix-triple-choc-layer-cake-98301-1.jpeg"
          alt=""
        />
        <h3 className={classes.title}>Triple Chocolate Mousse Cake</h3>
        <button className={classes.btn}>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;
