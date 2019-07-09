import React from "react";
import UserProfileCard from "../widgets/UserProfileCard/UserProfileCard";
import RatingIndicator from "../widgets/RatingIndicator/RatingIndicator";
import UserCommentsCard from '../widgets/UserCommentsCard/UserCommentsCard';
import axios from 'axios';
import styles from './ThankYouPage.module.css';

class ThankYouPage extends React.Component{

  //change the domain with user entered domain

  state = {
    userComments:[]
  }

  componentDidMount(){

  }

   renderProfileCard = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <UserProfileCard {...this.props} />
        </div>
      </div>
    );
  };
  
  renderUserComments = ()=>{
    return(
      <div className="row my-4">
          <div className="col-md-12">
            <UserCommentsCard />
          </div>
        </div>
    )
  }
  
  renderDomainAdditionalInfo = () => {
    return (
      <div className={`row ${styles.domainAdditionalInfo}`}>
        <div className="col-md-6 d-flex">
          <div>
            <p>Domain registration date : 1.12.1992</p>
            <p>Domain expiration date : 30.11.2019</p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div>
          <p>Phishtank status : Nothing Found</p>
          <p>Etherscam DB : Nothing found</p>
          </div>
        </div>
      </div>
    );
  };
  
  renderRatingIndicator = () => {
    return (
      <RatingIndicator
        rating={4.7}
        starRatedColor="#DAA520"
        starDimension="40px"
        // changeRating={}
        starSpacing="5px"
        numberOfStars={5}
        name="rating"
      />
    );
  };

  render(){
    return (
      <div className="container my-5">
        <h3 className="text-center mb-4">Thank you! Your profile is created!</h3>
        {this.renderProfileCard(this.props)}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h4>Your website {this.props.website} analyses</h4>
          </div>
        </div>
        <div className="text-center mt-3">
          <h5 className="mb-2">Low Risk</h5>
          {this.renderRatingIndicator()}
        </div>
        {this.renderDomainAdditionalInfo()}
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Trustworthiness (from api wot/trust): 4.7 / 5.0</h3>
          </div>
        </div>
        {this.renderUserComments()}
      </div>
    );
  }
};

export default ThankYouPage;
