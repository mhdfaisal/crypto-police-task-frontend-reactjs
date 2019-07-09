import React from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import uuid from "uuid/v1";

const renderFormField = ({
  valid,
  value,
  placeholder,
  touched,
  type,
  element,
  handleChange,
  id,
  name,
  options,
  handleShowPasswordClick,
  showPassword,
  labelText,
  styles,
  inputPhoneVal
}) => {
  switch (element) {
    case "input":
      return type === "password" ? (
        <>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              onChange={e => handleChange(e, id)}
              value={value}
              className={
                !valid && touched ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark"
                onClick={e => {
                  e.preventDefault();
                  handleShowPasswordClick();
                }}
              >
                <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"} />
              </button>
            </div>
          </div>
          {renderInvalidFeedback("Please enter a valid " + name)}
        </>
      ) : (
        <>
          <input
            type={type}
            placeholder={placeholder}
            onChange={e => handleChange(e, id)}
            value={value}
            className={
              !valid && touched ? "form-control is-invalid" : "form-control"
            }
            style={{ ...styles }}
          />
          {renderInvalidFeedback("Please enter a valid " + name)}
        </>
      );

    case "select":
      return (
        <>
          <select
            value={value}
            onChange={e => handleChange(e, id)}
            className={
              !valid && touched ? "form-control is-invalid" : "form-control"
            }
          >
            {renderSelectOptions(options, placeholder)}
          </select>
          {renderInvalidFeedback("Please select a valid " + name)}
        </>
      );

    case "intlPhoneInput":
      return (
        <>
          <IntlTelInput
            containerClassName="intl-tel-input"
            value={inputPhoneVal}
            inputClassName={
              !valid && touched ? "form-control is-invalid" : "form-control"
            }
            autoPlaceholder={true}
            defaultCountry="ch"
            onPhoneNumberChange={(isValid, value, countryData) => {
              handleChange({},"intlPhoneInput", {
                value: value,
                countryData: countryData
              });
            }}
            onSelectFlag = {(value,countryData) => {
              console.log()
              handleChange({},"intlPhoneInput", {
                value: value,
                countryData: countryData
              });
            }}
          />
          {renderInvalidFeedback("Please enter a valid " + name + " number")}
        </>
      );

    case "checkbox":
      return (
        <div className="form-check" style={{ paddingLeft: "0" }}>
          <label className="form-check-label" htmlFor={id}>
            <input
              type="checkbox"
              value={value}
              onChange={e => handleChange(e, id)}
              id={id}
              style={{
                height: "1.01rem",
                width: "1.01rem",
                verticalAlign: "middle"
              }}
            />
            <label htmlFor={id} className="ml-2">
              {labelText}
            </label>
          </label>
        </div>
      );

    default:
      return null;
  }
};

const renderInvalidFeedback = msg => {
  // return <div className="invalid-feedback">{msg}</div>;
  return null;
};

const renderSelectOptions = (options, placeholder) => {
  let optionsToRender = options.map(option => (
    <option value={option.value} key={uuid()}>
      {option.name}
    </option>
  ));
  optionsToRender = [
    <option value="" key={uuid()}>
      {placeholder}
    </option>,
    ...optionsToRender
  ];
  return optionsToRender;
};

const FormField = props => {
  return <>{renderFormField(props)}</>;
};

export default FormField;
