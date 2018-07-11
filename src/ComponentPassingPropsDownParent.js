//ref: https://reactjs.org/docs/components-and-props.html

import React from "react";
import ComponentPassingPropsDownChild from "./ComponentPassingPropsDownChild";

class ComponentPassingPropsDownParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hello",
      list: [1, 2, 3, 4]
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "yellow", padding: "20px" }}>
        <h1>Parent</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <ComponentPassingPropsDownChild childWillAccessThisProp={this.state} />
      </div>
    );
  }
}

export default ComponentPassingPropsDownParent;
