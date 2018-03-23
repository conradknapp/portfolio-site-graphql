import React from "react";

export default class About extends React.Component {
  state = {
    isHovered: false
  };

  handleHover = event => {
    console.dir(event.target);
    // this.setState({ isHovered: !this.state.isHovered });
    // console.log(this.state.isHovered);
  };

  render() {
    return (
      <div>
        <h1>About</h1>
        <video
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          style={{ width: "600px", height: "400px" }}
          src="http://res.cloudinary.com/durxpwzdq/video/upload/v1521751894/Capto_Capture_2018-03-22_04-08-28_PM.mov"
          autoPlay="true"
        />
      </div>
    );
  }
}
