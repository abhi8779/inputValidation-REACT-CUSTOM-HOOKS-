import useInputLogic from "../hooks/use-inputLogic";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: enterdNameIsValid,
    hasError: nameInputIsInvalid,
    vlaueChangeHandler: onNameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
    InvalidClass: nameIsInvalidClass,
  } = useInputLogic((value) => value.trim().length > 0);

  const {
    value: email,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    vlaueChangeHandler: onEmailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
    InvalidClass: emailIsInvalidClass,
  } = useInputLogic(
    (value) => value.trim().includes("@") && value.trim().includes(".")
  );
  const {
    value: password,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputIsInvalid,
    vlaueChangeHandler: onPasswordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
    InvalidClass: passwordIsInvalidClass,
  } = useInputLogic((value) => value.trim().length > 6);

  let formIsValid = false;

  if (enterdNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
    console.log("allvalid");
  }

  const fromSubmitHandler = (e) => {
    e.preventDefault();

    if (!enterdNameIsValid && !enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
  };
  console.log(nameIsInvalidClass);

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className={nameIsInvalidClass}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={onNameChangeHandler}
          onBlur={nameInputBlurHandler}
          placeholder="enter name"
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name Field Cannot Be Empty ⚠️</p>
        )}
      </div>
      <div className={emailIsInvalidClass}>
        <label htmlFor="email">Your Email</label>
        <input
          value={email}
          onChange={onEmailChangeHandler}
          onBlur={emailInputBlurHandler}
          placeholder="enter email"
          type="email"
          id="email"
        />
        {emailInputIsInvalid && (
          <p className="error-text">⚠️ Invalid Email ( include @ and . ) </p>
        )}
      </div>
      <div className={passwordIsInvalidClass}>
        <label htmlFor="email">Your Password</label>
        <input
          value={password}
          onChange={onPasswordChangeHandler}
          onBlur={passwordInputBlurHandler}
          placeholder="enter password"
          type="password"
          id="password"
        />
        {passwordInputIsInvalid && (
          <p className="error-text">
            ⚠️ password should be greater then 8 digits{" "}
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
