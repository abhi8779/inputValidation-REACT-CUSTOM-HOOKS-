import useInputLogic2 from "../hooks/use-inputLogic2";

const firstNameValidationLogic = (value) => value.trim() !== "";
const lastNameValidationLogic = (value) => value.trim() !== "";
const emailValidationLogic = (value) =>
  value.trim().includes("@") && value.trim().includes(".");

const BasicForm = (props) => {
  const {
    value: enteredFirstName,

    valueFieldIsValid: firstNameFieldIsValid,
    valueFieldHasError: firstNameFieldHasError,
    enteredVlaueChangeHandler: enteredFirstNameChangeHandler,
    valueFieldOnBlurHandler: firstNameFieldOnBlurHandler,
    InValidValueClasses: InValidFirstNameClasses,
    resetFn: resetFirstNameField,
  } = useInputLogic2(firstNameValidationLogic);

  const {
    value: enteredLastName,

    valueFieldIsValid: lastNameFieldIsValid,
    valueFieldHasError: lastNameFieldHasError,

    enteredVlaueChangeHandler: enteredLastNameChangeHandler,
    valueFieldOnBlurHandler: lastNameFieldOnBlurHandler,
    InValidValueClasses: InValidLastNameClasses,
    resetFn: resetLastNameField,
  } = useInputLogic2(lastNameValidationLogic);

  const {
    value: enteredEmail,
    valueFieldIsValid: emailFieldIsValid,
    valueFieldHasError: emailFieldHasError,

    enteredVlaueChangeHandler: enteredEmailChangeHandler,
    valueFieldOnBlurHandler: emailFieldOnBlurHandler,
    InValidValueClasses: InValidEmailClasses,
    resetFn: resetEmailField,
  } = useInputLogic2(emailValidationLogic);

  //Checking OverAll from validity
  const overAllFromIsValid =
    firstNameFieldIsValid && lastNameFieldIsValid && emailFieldIsValid
      ? true
      : false;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    resetFirstNameField();
    resetLastNameField();
    resetEmailField();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={"control-group"}>
        <div className={InValidFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={enteredFirstNameChangeHandler}
            onBlur={firstNameFieldOnBlurHandler}
          />
          {firstNameFieldHasError && (
            <p className="error-text">⚠️ First Name Cannot Be Empty</p>
          )}
        </div>
        <div className={InValidLastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={enteredLastNameChangeHandler}
            onBlur={lastNameFieldOnBlurHandler}
          />
          {lastNameFieldHasError && (
            <p className="error-text">⚠️ Last Name Cannot Be Empty</p>
          )}
        </div>
      </div>
      <div className={InValidEmailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={emailFieldOnBlurHandler}
        />
        {emailFieldHasError && (
          <p className="error-text">⚠️ Invalid Email (Include "@" and "." )</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!overAllFromIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
