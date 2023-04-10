import react, { useContext } from "react";
import classes from "./Checkout.module.css";
import useForm from "../../hooks/useForm";
import CartContext from "../../store/cart-context";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const confirmHandler = async(event) => {
    event.preventDefault();
    const customerInfoObject = {
      nameInput: nameInput,
      streetInput: streetInput,
      postalInput: postalInput,
      cityInput: cityInput,
      totalAmount: props.totalAmount,
      orderItems: cartCtx.items
    };
    props.isSubmittingHandler()

    const post = await fetch("https://react-http-6c9d5-default-rtdb.firebaseio.com/orders.json" ,{
        method: 'POST',
        body: JSON.stringify(customerInfoObject),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      const data = await post.json();

      console.log(post)

    props.confirmationScreenHandler();
    cartCtx.clearItems();

    console.log(customerInfoObject);
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  const {
    input: cityInput,
    isValid: cityIsValid,
    hasError: cityHasError,
    setInputHandler: setCityInputHandler,
    setTouchedHandler: setCityTouchedHandler,
    reset: resetCity,
  } = useForm((input) => input.trim() !== "");

  const {
    input: postalInput,
    isValid: postalIsValid,
    hasError: postalHasError,
    setInputHandler: setPostalInputHandler,
    setTouchedHandler: setPostalTouchedHandler,
    reset: resetPostal,
  } = useForm((input) => input.trim() !== "" && !isNaN(input));

  const {
    input: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    setInputHandler: setNameInputHandler,
    setTouchedHandler: setNameTouchedHandler,
    reset: resetName,
  } = useForm((input) => input.trim() !== "");

  const {
    input: streetInput,
    isValid: streetIsValid,
    hasError: streetHasError,
    setInputHandler: setStreetInputHandler,
    setTouchedHandler: setStreetTouchedHandler,
    reset: resetStreet,
  } = useForm((input) => input.trim() !== "");

  const nameInputClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const streetInputClasses = streetHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const postalInputClasses = postalHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const cityInputClasses = cityHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const formAllValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={setNameInputHandler}
          onBlur={setNameTouchedHandler}
        />
        {nameHasError && (
          <p style={{ color: "#aa0b20" }}>A name must be entered</p>
        )}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput}
          onChange={setStreetInputHandler}
          onBlur={setStreetTouchedHandler}
        />
        {streetHasError && (
          <p style={{ color: "#aa0b20" }}>A street must be entered</p>
        )}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalInput}
          onChange={setPostalInputHandler}
          onBlur={setPostalTouchedHandler}
        />
        {postalHasError && (
          <p style={{ color: "#aa0b20" }}>Must be a valid number</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityInput}
          onChange={setCityInputHandler}
          onBlur={setCityTouchedHandler}
        />
        {cityHasError && (
          <p style={{ color: "#aa0b20" }}>Must enter valid city</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formAllValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
