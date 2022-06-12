import { useState } from "react";

const useInputLogic = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setinputIsTouched] = useState(false);

  const enterdValueIsValid = validationLogic(enteredValue);
  const hasError = !enterdValueIsValid && inputIsTouched;

  const vlaueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setinputIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setinputIsTouched(false);
  };

  const InvalidClass = hasError ? "form-control invalid" : "form-control ";

  return {
    value: enteredValue,
    isValid: enterdValueIsValid,
    hasError,
    vlaueChangeHandler,
    inputBlurHandler,
    reset,
    InvalidClass,
  };
};

export default useInputLogic;
