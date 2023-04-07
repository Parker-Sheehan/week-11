import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";
import classes from './AdBanner.module.css'

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})
           no-repeat center center/cover`,
      }}
      className={classes.FoodPic}>
      <div className={classes.content}>
        <h3 style={{color: `white`}}>New Recipe</h3>
        <h1 className={classes.title}>Pineapple Salmon</h1>
        <h3 style={{color: `white`,
      }}>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and
          garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className={classes.blueBtn}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
