import React from "react";
import FormField from "../widgets/FormField/FormField";
import FileUploader from "../widgets/FileUploader/FileUploader";
import CustomBtn from "../widgets/CustomBtn/CustomBtn";
import BackBtn from "../widgets/BackBtn/BackBtn";
import styles from "../RegisterForm/RegisterForm.module.css";

const renderLabel = lableText => {
  return (
    <div className={`col-md-4 ${styles.registerFormLabelContainer}`}>
      <div>{lableText}</div>
    </div>
  );
};

const renderFooterButtons = (goToPrevStep, handleSaveBtnClick) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <CustomBtn title="Save and go further >>" handleClick={()=>{handleSaveBtnClick("userprofile")}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <BackBtn title="Or go back!" handleClick={goToPrevStep}  />
        </div>
      </div>
    </>
  );
};

const UserProfileForm = ({ name, handleChange, website, country, goToPrevStep, handleSaveBtnClick }) => {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Complete your user profile</h3>
      <div className="row form-group">
        {renderLabel("Name")}
        <div className="col-md-8">
          <FormField {...name} handleChange={handleChange} id="name" />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("Website")}
        <div className="col-md-8">
          <FormField {...website} handleChange={handleChange} id="website" />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("Country")}
        <div className="col-md-8">
          <FormField {...country} handleChange={handleChange} id="country" />
        </div>
      </div>
      <div className="row">
        {renderLabel("Avatar")}
        <div className="col-md-8">
          <FileUploader />
        </div>
      </div>
      <div className="row form-group">
        {renderLabel("")}
        <div className="col-md-8">{renderFooterButtons(goToPrevStep, handleSaveBtnClick)}</div>
      </div>
    </div>
  );
};

export default UserProfileForm;

{
  /* <FormField {...name} handleChange={handleChange} id="name" />
      <FormField {...website} handleChange={handleChange} id="website" />
      <FormField {...country} handleChange={handleChange} id="country" />
      <FileUploader /> */
}
