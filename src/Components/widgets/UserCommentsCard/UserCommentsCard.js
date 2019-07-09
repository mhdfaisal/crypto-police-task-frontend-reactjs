import React from "react";
import styles from "./UserCommentsCard.module.css";

const UserCommentsCard = () => {
  return (
    <div className={styles.commentsCardContainer}>
      <div>
        <div className={styles.commentsAvatarContainer}>
          <img
            src="http://www.mohdfaisal.com/assets/images/faisal-profile-photo.png"
            alt="avatar"
          />
        </div>
      </div>
      <div>
        <div className={styles.commentsHeader}>
            <p>X-Pilot</p>
            <p>May 25,2018</p>
        </div>
        <div className={styles.commentsBody}>
            <p>One of the best resources about phishing and how to fight with it.</p>
        </div>
      </div>
    </div>
  );
};

export default UserCommentsCard;
