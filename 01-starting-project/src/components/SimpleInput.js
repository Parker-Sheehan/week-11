import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameChangedHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailChangedHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const formSubmitionHandler = (event) => {
    event.preventDefault();

    resetNameInput()
    resetEmailInput()
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameChangedHandler}
        />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailChangedHandler}
          value={enteredEmail}
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        {nameInputHasError && (
          <p className="error-text">name must not be empty</p>
        )}
        {emailInputHasError && <p className="error-text">Email is invalid</p>}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
