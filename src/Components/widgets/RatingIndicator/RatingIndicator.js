import React from "react";
import StarRatings from "react-star-ratings";

const RatingIndicator = props => {
  return (
    <div>
      <StarRatings {...props} />
    </div>
  );
};

export default RatingIndicator;
