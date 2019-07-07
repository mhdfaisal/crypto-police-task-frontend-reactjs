import React from 'react';
import NavBar from '../widgets/NavBar/NavBar';
import styles from './Header.module.css';
const Header = ()=>{
    return(
        <div className={styles.headerBackground}>
            <NavBar />
        </div>
    )
}
export default Header;