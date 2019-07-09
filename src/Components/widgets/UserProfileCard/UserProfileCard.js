import React from "react";
import styles from "./UserProfileCard.module.css";
const UserProfileCard = ({
  avatar,
  name,
  category,
  email,
  country,
  intlPhoneInput,
  website
}) => {
  return (
    <div className={`${styles.profileContainer}`}>
      <div className={styles.profileAvatarContainer}>
        <div className={`${styles.profileCardAvatar}`}>
          <img
            src="http://www.mohdfaisal.com/assets/images/faisal-profile-photo.png"
            alt="avatar"
          />
        </div>
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <div>{intlPhoneInput}</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <p>{category}</p>
          <p>From {country}</p>
          <div>{website}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
