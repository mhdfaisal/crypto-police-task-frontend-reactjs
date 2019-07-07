import React from "react";
import styles from "./CustomBtn.module.css";

const CustomBtn = props => {
  return (
    <button
      className={styles.customBtn}
      style={props.style}
      onClick={e => {
        e.preventDefault();
        props.handleClick();
      }}
    >
      {props.title}
    </button>
  );
};
export default CustomBtn;
