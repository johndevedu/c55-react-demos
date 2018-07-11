import React from "react";

import LiftingStateUpChild from "./LiftingStateUpChild";

class LiftingStateUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onChildButtonClick = this.onChildButtonClick.bind(this);
  }

  //step 1 - define the function to be passed into child
  onChildButtonClick(text) {
    //display map
    //display advertisement
    this.setState({
      textFromChild: text
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "green", padding: "20px" }}>
        <pre>step 1: onChildButtonClick</pre>
        {/* step 2 pass in the function as a attribute (PROPS) */}
        <h1>Another Parent</h1>
        <pre>
          step 2: onChildButtonClick(bound to parent) going into child through{" "}
          <br />
          attributes i.e. onChildButtonClickPassedAsProps={
            "{this.onChildButtonClick}"
          }{" "}
          {"\u2193"}
        </pre>
        <LiftingStateUpChild
          onChildButtonClickPassedAsProps={this.onChildButtonClick}
        />
        <h1>{this.state.textFromChild}</h1>
      </div>
    );
  }
}

export default LiftingStateUp;
