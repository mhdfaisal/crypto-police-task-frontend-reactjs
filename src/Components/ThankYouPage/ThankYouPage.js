import React from "react";
import UserProfileCard from "../widgets/UserProfileCard/UserProfileCard";
import RatingIndicator from "../widgets/RatingIndicator/RatingIndicator";
import UserCommentsCard from "../widgets/UserCommentsCard/UserCommentsCard";
import Spinner from "../widgets/Spinner/Spinner";
import uuid from "uuid/v1";
import axios from "axios";
import styles from "./ThankYouPage.module.css";

class ThankYouPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userComments: [],
      fetched: false,
      ratings: 0,
      registrationDate: "",
      expirationDate: "",
      phishtankStatus: "",
      etherscamDb: "",
      trustworthiness: {
        color: "",
        value: ""
      },
      userCommentsToShow: []
    };
  }

  componentDidMount() {
    axios
      .post("https://watchdog-api-v1.cryptopolice.com/api/verify", {
        domain: this.props.website
      })
      .then(res => {
        const data = res.data.response;
        this.setState({
          userComments: [...data.wot.payload.comments],
          userCommentsToShow: [...data.wot.payload.comments.slice(0, 2)],
          ratings: data.general_analysis.payload.ratings.watchdog,
          registrationDate: data.whois.payload.registration.value,
          expirationDate: data.whois.payload.expiration.value,
          phishtankStatus: data.phishtank.payload.status.value,
          etherscamDb: data.etherscam.payload.status.value,
          trustworthiness: {
            color: data.wot.payload.trust.color,
            value: data.wot.payload.trust.value
          },
          fetched: true
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
    const { fetched, userCommentsToShow } = this.state;
    return userCommentsToShow.length > 0 ? (
      userCommentsToShow.map(commentData => {
        return (
          <div className="col-md-12 my-2" key={uuid()}>
            <UserCommentsCard commentData={commentData} />
          </div>
        );
      })
    ) : !fetched ? (
      <div className="col-md-12 text-center">loading...</div>
    ) : (
      <div className="col-md-12 text-center">No user comments found</div>
    );
  };

  renderDomainAdditionalInfo = () => {
    return (
      <div className={`row ${styles.domainAdditionalInfo}`}>
        <div className="col-md-6 d-flex">
          <div>
            <p>Domain registration date : {this.state.registrationDate}</p>
            <p>Domain expiration date : {this.state.expirationDate}</p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div>
            <p>Phishtank status : {this.state.phishtankStatus}</p>
            <p>Etherscam DB : {this.state.etherscamDb}</p>
          </div>
        </div>
      </div>
    );
  };

  renderRatingIndicator = () => {
    return this.state.fetched ? (
      <RatingIndicator
        rating={Number(this.state.ratings)}
        starRatedColor={this.state.trustworthiness.color}
        starDimension="40px"
        starSpacing="5px"
        numberOfStars={5}
        name="rating"
      />
    ) : null;
  };

  renderSpinner = () => {
    return (
      <div className="row my-5">
        <div className="col-md-12 text-center">
          <Spinner />
          <Spinner />
          <Spinner />
        </div>
      </div>
    );
  };

  renderShowMoreBtn = () => {
    return this.state.userComments.length > 0 ? (
      <div className="row my-2 text-center">
        <div className="col-md-12">
          <div>
            <a
              href="/"
              alt="show more"
              onClick={e => {
                this.handleShowMoreBtnClick(e);
              }}
            >
              {this.state.userComments.length ===
              this.state.userCommentsToShow.length
                ? null
                : "Show more"}
            </a>
          </div>
        </div>
      </div>
    ) : null;
  };

  handleShowMoreBtnClick = e => {
    e.preventDefault();
    const { userCommentsToShow, userComments } = this.state;
    const userCommentsLength = userComments.length;
    const userCommentsToShowLength = userCommentsToShow.length;
    if (userCommentsToShowLength === 2) {
      this.setState({
        userCommentsToShow: [
          ...userCommentsToShow,
          ...userComments.slice(
            userCommentsToShowLength,
            userCommentsLength < 10 ? userCommentsLength: 10
          )
        ]
      });
    } else if(userCommentsToShowLength > 2) {
        this.setState({
          userCommentsToShow:[...userCommentsToShow, ...userComments.slice(
            userCommentsToShowLength, userCommentsLength < userCommentsToShowLength + 10 ? userCommentsLength : userCommentsToShowLength + 10
          )]
        })
    }
  };

  renderAnalysesInfo = () => {
    return (
      <>
        <div className="text-center mt-3">
          <h5 className="mb-2">
            {this.state.ratings > 2 ? "Low Risk" : "High Risk"}
          </h5>
          {this.renderRatingIndicator()}
        </div>
        {this.renderDomainAdditionalInfo()}

        <div className="row">
          <div className={`col-md-12 text-center ${styles.breakHeading}`}>
            <h4>
              Trustworthiness:{" "}
              {this.state.trustworthiness.value !== "Nothing found"
                ? this.state.trustworthiness.value + " / 5.0"
                : this.state.trustworthiness.value}
            </h4>
          </div>
        </div>
        <div className="row my-4">{this.renderUserComments()}</div>
        {this.renderShowMoreBtn()}
      </>
    );
  };

  render() {
    return (
      <div className={`my-5 ${styles.container}`}>
        <div className="row">
          <div className="col-md-12">
            <h3 className={`text-center mb-4 ${styles.profileHeading}`}>
              Thank you! Your profile is created!
            </h3>
          </div>
        </div>
        {this.renderProfileCard(this.props)}
        <div className="row mt-5">
          <div className="col-md-12">
            <div className={styles.breakHeading}>
              <h4>Your website {this.props.website} analyses</h4>
            </div>
          </div>
        </div>
        <div>
          {this.state.fetched
            ? this.renderAnalysesInfo()
            : this.renderSpinner()}
        </div>
      </div>
    );
  }
}

export default ThankYouPage;
