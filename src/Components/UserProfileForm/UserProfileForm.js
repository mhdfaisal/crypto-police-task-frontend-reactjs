import React from "react";
import FormField from "../widgets/FormField/FormField";
import FileUploader from "../widgets/FileUploader/FileUploader";
import CustomBtn from "../widgets/CustomBtn/CustomBtn";
import BackBtn from "../widgets/BackBtn/BackBtn";
import styles from "../RegisterForm/RegisterForm.module.css";
import axios from "axios";

class UserProfileForm extends React.Component {
  state = {
    file: null,
    uploading: false,
    imageUploadErr: false
  };

  renderLabel = lableText => {
    return (
      <div className={`col-md-4 ${styles.registerFormLabelContainer}`}>
        <div>{lableText}</div>
      </div>
    );
  };

  renderFooterButtons = (goToPrevStep, handleSaveBtnClick) => {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <CustomBtn
              title="Save and go further >>"
              handleClick={() => {
                handleSaveBtnClick("userprofile");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <BackBtn title="Or go back!" handleClick={goToPrevStep} />
          </div>
        </div>
      </>
    );
  };

  handleImageUpload = () => {
    const { file } = this.state;
    let formData = new FormData();
    formData.append("photo", file);
    axios
      .post("https://fast-ravine-38205.herokuapp.com/api/file", formData)
      .then(res => {
        this.props.handleAvatarChange(res.data.url);
        this.setState({ uploading: false });
      })
      .catch(err => {
        this.setState({ imageUploadErr: true, uploading: false });
        console.log(err);
      });
  };

  handleFileSelection = file => {
    this.setState({ file: file, uploading: true }, () => {
      this.handleImageUpload();
    });
  };

  renderSpinner = () => {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  renderFileUploader = () => {
    if (this.props.avatar.value.trim() === "") {
      return (
        <div className="col-md-8">
          {!this.state.uploading && !this.state.imageUploadErr ? (
            <FileUploader
              onFileSelected={this.handleFileSelection}
              avatar={this.props.avatar}
            />
          ) : this.state.imageUploadErr && !this.state.uploading ? (
            <p className="small text-danger">
              Sorry, some error occured while uploading the image, please
              refresh the page and try again
            </p>
          ) : (
            this.renderSpinner()
          )}
        </div>
      );
    } else {
      return (
        <div className="col-md-8">
          <p className="small text-success my-1 mb-0">
            Avatar was uploaded successfuly !
          </p>
        </div>
      );
    }
  };

  render() {
    const {
      name,
      website,
      country,
      handleChange,
      goToPrevStep,
      handleSaveBtnClick
    } = this.props;

    return (
      <div className="container my-5">
        <h3 className="text-center mb-4">Complete your user profile</h3>
        <div className="row form-group">
          {this.renderLabel("Name")}
          <div className="col-md-8">
            <FormField {...name} handleChange={handleChange} id="name" />
          </div>
        </div>
        <div className="row form-group">
          {this.renderLabel("Website")}
          <div className="col-md-8">
            <FormField {...website} handleChange={handleChange} id="website" />
          </div>
        </div>
        <div className="row form-group">
          {this.renderLabel("Country")}
          <div className="col-md-8">
            <FormField {...country} handleChange={handleChange} id="country" />
          </div>
        </div>
        <div className="row">
          {this.renderLabel("Avatar")}
          {this.renderFileUploader()}
        </div>
        <div className="row form-group">
          {this.renderLabel("")}
          <div className="col-md-8">
            {this.renderFooterButtons(goToPrevStep, handleSaveBtnClick)}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileForm;
