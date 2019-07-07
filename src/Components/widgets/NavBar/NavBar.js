import React from "react";
import styles from "./NavBar.module.css";

const NavBar = props => {
  return (
    <div className={styles.navBarContainerOuter}>
      <div className={styles.navBarContainerInner}>
        <div className={styles.navBarLogoContainer}>
          <img src="/images/logo/logo.png" alt="logo" />
        </div>
        <ul className={styles.navBarLinkList}>
          <li className={styles.navBarLinkListItem}>
            <a href="/" alt="homepage">
            <span>
                <i
                  className="fa fa-home mr-2"
                />
              </span>
              <span>Home</span>
            </a>
          </li>
          <li className={styles.navBarLinkListItem}>
            <a href="/">
              <span>
                <i
                  className="fa fa-linkedin-square mr-2"
                />
              </span>
              <span>LinkedIn</span>
            </a>
          </li>
          <li className={styles.navBarLinkListItem}>
            <a href="/">
              <span>
                <i
                  className="fa fa-github-square mr-2"
                />
              </span>
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
