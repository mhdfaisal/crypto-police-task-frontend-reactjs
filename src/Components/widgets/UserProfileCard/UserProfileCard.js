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
          <p>Martin</p>
          <p>martin@gmail.com</p>
          <div>+371 28452331</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <p>Front end developer</p>
          <p>From Austria</p>
          <div>www.martin.com</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
