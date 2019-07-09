import React from "react";
import FormField from "../widgets/FormField/FormField";
import CustomBtn from '../widgets/CustomBtn/CustomBtn';
import BackBtn from '../widgets/BackBtn/BackBtn';
const renderHeader = ()=>{
    return(
        <div className="row">
        <div className="col-md-12 text-center">
          <h3>Create your security code</h3>
          <h5 className="my-3">Enter code below</h5>
        </div>
      </div>
    )
}

const renderFooterButtons = (goToPrevStep,handleSaveBtnClick)=>{
    return(
        <>
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <CustomBtn title="Save and go further >>" handleClick={()=>{handleSaveBtnClick("securitycode")}}/>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
                <BackBtn title="Or go back!" handleClick={goToPrevStep}/>
            </div>
        </div>
        </>
    )
}

const SecurityCodeForm = ({ securityCode, handleChange, goToPrevStep, handleSaveBtnClick }) => {
  return (
    <div className="container my-5">
      {renderHeader()}
      <div className="row mt-2">
        <div className="col-md-6 offset-md-3">
          <FormField
            {...securityCode}
            handleChange={handleChange}
            id="securityCode"
            styles={{textAlign:"center"}}
          />
        </div>
      </div>
      {renderFooterButtons(goToPrevStep, handleSaveBtnClick)}
    </div>
  );
};

export default SecurityCodeForm;
