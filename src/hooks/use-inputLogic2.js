import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: action.value,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }

  return initialState;
};

const useInputLogic2 = (validationFn) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueFieldIsValid = validationFn(inputState.value);
  const valueFieldHasError = !valueFieldIsValid && inputState.isTouched;

  const enteredVlaueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const valueFieldOnBlurHandler = () => {
    dispatch({ type: "BLUR", value: true });
  };

  const InValidValueClasses = valueFieldHasError
    ? "form-control invalid"
    : "form-control";

  const resetFn = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueFieldIsValid,
    valueFieldHasError,
    enteredVlaueChangeHandler,
    valueFieldOnBlurHandler,
    InValidValueClasses,
    resetFn,
  };
};

export default useInputLogic2;
