import React from "react";

class AvatarPreview extends React.Component {
  state = {
    imgURL: ""
  };

  componentDidMount() {
    const imgURL = URL.createObjectURL(this.props.file);
    this.setState({ imgURL });
  }

  render() {
    return (
      <div className="row ml-1 mt-3">
        <div className="col-xs-8">
          <div style={{ height: "125px", width: "125px" }}>
            <img
              src={this.state.imgURL}
              alt="avatar_preview"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="col-xs-4 align-self-center">
          <button className="btn btn-success btn-sm mx-2">Upload</button>
          <button className="btn btn-danger btn-sm">Change</button>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    URL.revokeObjectURL(this.state.imgURL);
  }
}
export default AvatarPreview;
