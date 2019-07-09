import React from "react";
import styles from "./CustomBtn.module.css";

const CustomBtn = props => {
  return (
    <button
      className={props.disabled ? styles.customBtnDisabled: styles.customBtn}
      style={props.style}
      onClick={e => {
        e.preventDefault();
        !props.disabled ? props.handleClick() : e.preventDefault()
      }}
    >
      {props.title}
    </button>
  );
};
export default CustomBtn;
