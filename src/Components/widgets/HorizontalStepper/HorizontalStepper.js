import React from "react";
import Stepper from "react-stepper-horizontal";
import "./horizontalStepper.css";
const HorizontalStepper = props => {
  return (
    <div className="horizontalStepper">
      <Stepper {...props} />
    </div>
  );
};
export default HorizontalStepper;
