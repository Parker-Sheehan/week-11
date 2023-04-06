import React from "react";
import {Link} from "react-router-dom";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.banner}>
      <h2 className={classes.title}>Devmountain Eatery</h2>
      <nav className={classes.links}>
        <Link to="">
          <button className={classes.buttons}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={classes.buttons}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
