import useInput from '../hooks/useInput'

const BasicForm = (props) => {

  const {
    input: firstInput,
    hasError: firstHasError,
    isValid: firstIsValid,
    inputHandler: firstInputHandler,
    touchHandler: firstTouchHandler,
    reset: firstReset
  } = useInput((input) => input.trim() !== "")

  const {
    input: lastInput,
    hasError: lastHasError,
    isValid: lastIsValid,
    inputHandler: lastInputHandler,
    touchHandler: lastTouchHandler,
    reset: lastReset
  } = useInput((input) => input.trim() !== "")

  const {
    input: emailInput,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputHandler: emailInputHandler,
    touchHandler: emailTouchHandler,
    reset: emailReset
  } = useInput((input) => input.includes('@'))



  const firstClasses = firstHasError ? 'form-control invalid': 'form-control'
  const lastClasses = lastHasError ? 'form-control invalid': 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid': 'form-control'


  const formIsValid = (firstIsValid && lastIsValid && emailIsValid)


  const submitHandler = (event) => {
    event.preventDefault()


    firstReset()
    lastReset()
    emailReset()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstClasses}>
          <label htmlFor='name'>First Name</label>
          <input onBlur={firstTouchHandler} onChange={firstInputHandler} value={firstInput} type='text' id='name' />
        </div>
        <div className={lastClasses}>
          <label htmlFor='name'>Last Name</label>
          <input onBlur={lastTouchHandler} onChange={lastInputHandler} value={lastInput} type='text' id='name' />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onBlur={emailTouchHandler} onChange={emailInputHandler} value={emailInput} type='text' id='name' />
      </div>
      <div className='form-actions'>
        {firstHasError && <p className='error-text'>First name can't be empty</p>}
        {lastHasError && <p className='error-text'>Last name can't be empty</p>}
        {emailHasError && <p className='error-text'>must be valid email</p>}


        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
