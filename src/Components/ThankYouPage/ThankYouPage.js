import React from "react";
import UserProfileCard from "../widgets/UserProfileCard/UserProfileCard";
import RatingIndicator from "../widgets/RatingIndicator/RatingIndicator";
import UserCommentsCard from "../widgets/UserCommentsCard/UserCommentsCard";
import uuid from "uuid/v1";
import axios from "axios";
import styles from "./ThankYouPage.module.css";

class ThankYouPage extends React.Component {
  //change the domain with user entered domain

  state = {
    userComments: [],
    userCommentsSliced: [],
    showAll: false
  };

  componentDidMount() {
    axios
      .post("https://watchdog-api-v1.cryptopolice.com/api/verify", {
        domain: "https://google.com"
      })
      .then(res => {
        console.log(res.data.response);
        const data = res.data.response;
        this.setState({
          userComments: [
            ...data.wot.payload.comments.slice(
              2,
              data.wot.payload.comments.length
            )
          ],
          userCommentsSliced: [...data.wot.payload.comments.slice(0, 2)]
        });
      })
      .catch(err => {
        console.log(err);
      });
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

  renderUserComments = () => {
    const { userCommentsSliced, userComments, showAll } = this.state;
    const commentsToRender = !showAll ? userCommentsSliced : userComments;
    return commentsToRender.length > 0
      ? commentsToRender.map(commentData => {
          return (
            <div className="col-md-12 my-2" key={uuid()}>
              <UserCommentsCard commentData={commentData} />
            </div>
          );
        })
      : "loading...";
  };

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

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center mb-4">
              Thank you! Your profile is created!
            </h3>
          </div>
        </div>
        {this.renderProfileCard(this.props)}
        <div className="row mt-5">
          <div className="col-md-12">
            <div className={styles.breakHeading}><h4>Your website {this.props.website} analyses</h4></div>
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
        <div className="row my-4">{this.renderUserComments()}</div>
        {this.state.userComments.length > 0 ? (
          <div className="row my-2 text-center">
            <div className="col-md-12">
              <div>
                <a
                  href="/"
                  alt="show more"
                  onClick={e => {
                    e.preventDefault();
                    this.setState(prevState => {
                      return { ...prevState, showAll: !prevState.showAll };
                    });
                  }}
                >
                  {this.state.showAll ? "Show less" : "Show more"}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ThankYouPage;
