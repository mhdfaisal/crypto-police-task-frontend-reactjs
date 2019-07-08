import React from 'react';
import styles from './BackBtn.module.css';

const BackBtn = (props)=>{

    return(
        <button className={styles.backBtn} style={{...props.style}} onClick={(e)=>{
            e.preventDefault();
            props.handleClick();
        }}>{props.title}</button>
    )
}
export default BackBtn;