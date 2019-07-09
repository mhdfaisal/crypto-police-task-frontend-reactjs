import React from "react";
import styles from "./UserCommentsCard.module.css";

const UserCommentsCard = ({commentData}) => {
  return (
    <div className={styles.commentsCardContainer}>
      <div>
        <div className={styles.commentsAvatarContainer}>
          <img
            src={commentData.avatar}
            alt="avatar"
          />
        </div>
      </div>
      <div>
        <div className={styles.commentsHeader}>
            <p>{commentData.name}</p>
            <p>{commentData.date}</p>
        </div>
        <div className={styles.commentsBody}>
            <p>{commentData.text}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCommentsCard;
