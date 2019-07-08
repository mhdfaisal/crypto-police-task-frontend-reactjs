import React from "react";
import UserProfileCard from '../widgets/UserProfileCard/UserProfileCard';

const ThankYouPage = (props) => {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Thank you! Your profile is created!</h3>
      <div className="row">
          <div className="col-md-12">
              <UserProfileCard {...props} />
          </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
