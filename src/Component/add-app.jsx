import React from "react";
import styled from "styled-components";

export default class AddApplication extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="application-window">
        <p>this is a popup window</p>
      </div>
    );
  }
}
