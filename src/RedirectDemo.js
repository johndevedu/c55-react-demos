//used only initially to show a way of doing programmatic redirect with conditional render
//later on, use the props.history.push

import React from "react";
import { Redirect } from "react-router-dom";

class RedirectDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedirectOn: false
    };

    this.onRedirectButton = this.onRedirectButton.bind(this);
  }

  onRedirectButton() {
    this.setState({
      isRedirectOn: true
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isRedirectOn && <Redirect to="/" />}
        <h1>Redirect Demo page!!!</h1>
        <button onClick={this.onRedirectButton}>
          Change Is Redirect On to True
        </button>
      </React.Fragment>
    );
  }
}

export default RedirectDemo;
