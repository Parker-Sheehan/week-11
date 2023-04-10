import React, { useState } from "react";

const useInput = (condition) => {
  const [inputValue, setInputValue] = useState("");
  const [touchValue, setTouchValue] = useState(false);
  const isValid = condition(inputValue);
  const hasError = !isValid && touchValue;

  const setInputValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const setTouchValueHandler = () => {
    setTouchValue(true);
  };

  const reset = () => {
    setInputValue("");
    setTouchValue(false);
  };

  return {
    input: inputValue,
    hasError: hasError,
    isValid: isValid,
    inputHandler: setInputValueHandler,
    touchHandler: setTouchValueHandler,
    reset,
  };
};

export default useInput;
