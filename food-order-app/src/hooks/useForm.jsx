import React, { useState } from "react";

const useForm = (condition) => {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);
  
  const isValid = condition(input);
  const hasError = !isValid && touched;

  const setInputHandler = (event) => {
    setInput(event.target.value);
  };
  const setTouchedHandler = () => {
    setTouched(true);
  };
  const reset = () => {
    setInput("");
    setTouched(false);
  };

  return {
    input: input,
    touched: touched,
    isValid: isValid,
    hasError: hasError,
    setInputHandler: setInputHandler,
    setTouchedHandler: setTouchedHandler,
    reset: reset,
  };
};

export default useForm;
