import React from "react";
import FormField from "../widgets/FormField/FormField";
import styles from "./RegisterForm.module.css";
import CustomBtn from "../widgets/CustomBtn/CustomBtn";

const renderLabel = lableText => {
  return (
    <div className={`col-md-4 ${styles.registerFormLabelContainer}`}>
      <div>{lableText}</div>
    </div>
  );
};

const RegisterForm = ({
  email,
  phone,
  category,
  password,
  agreement,
  handleChange,
  handleShowPasswordClick,
  handleRegisterClick
}) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Register</h3>
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("Email")}
        <div className="col-md-8">
          <FormField {...email} handleChange={handleChange} id="email" />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("Mobile")}
        <div className="col-md-8">
          <FormField
            {...phone}
            handleChange={handleChange}
            id="intlPhoneInput"
          />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("Category")}
        <div className="col-md-8">
          <FormField {...category} handleChange={handleChange} id="category" />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("Password")}
        <div className="col-md-8">
          <FormField
            {...password}
            handleChange={handleChange}
            id="password"
            handleShowPasswordClick={handleShowPasswordClick}
          />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("")}
        <div className="col-md-8">
          <FormField
            {...agreement}
            handleChange={handleChange}
            id="agreement"
          />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("")}
        <div className="col-md-8">
          <CustomBtn
            title="Register"
            disabled={!agreement.isChecked}
            handleClick={() => {
              handleRegisterClick("register");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
