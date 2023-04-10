import React, { useState } from "react";
import { Formik } from "formik";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("")

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = async(values) => {
    values.ingredients = ingredients;
    values.type = type
    const response = await fetch('https://recipes.devmountain.com/recipes',{
      method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);

    setName("");
    setQuantity("");
  };

  const typeChangeHandler = (evt) => {
    setType(evt.target.value)
  }

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="recipe name"
              onChange={handleChange}
              value={values.recipeName}
              name="recipeName"
            />
            <input
              type="text"
              placeholder="image url"
              onChange={handleChange}
              value={values.imageURL}
              name="imageURL"
            />
            <input
              type="text"
              placeholder="prep time"
              onChange={handleChange}
              value={values.prepTime}
              name="prepTime"
            />
            <input
              type="text"
              placeholder="cook time"
              onChange={handleChange}
              value={values.cookTime}
              name="cookTime"
            />
            <input
              type="text"
              placeholder="serves"
              onChange={handleChange}
              value={values.serves}
              name="serves"
            />

            <input
              type="text"
              placeholder="Ingredient"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            ></button>

            <textarea
              name="instructions"
              placeholder="instructions"
              onChange={handleChange}
              value={values.instructions}
              cols="30"
              rows="10"
            ></textarea>

            <label htmlFor="cook">Cook</label>
            <input
              onChange={typeChangeHandler}
              type="radio"
              name="style"
              value='cook'
            />

            <label htmlFor="cook">bake</label>
            <input
              onChange={typeChangeHandler}
              type="radio"
              name="style"
              value='bake'
            />

            <label htmlFor="cook">drink</label>
            <input
              onChange={typeChangeHandler}
              type="radio"
              name="style"
              value='drink'
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
