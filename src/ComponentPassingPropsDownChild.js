import React from "react";

class ComponentPassingPropsDownChild extends React.Component {
  render() {
    const list = this.props.childWillAccessThisProp.list.map(item => {
      return <li>item</li>;
    });

    return (
      <div style={{ backgroundColor: "orange", padding: "20px" }}>
        <h1>Child</h1>
        <h3>name: {this.props.childWillAccessThisProp.name}</h3>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default ComponentPassingPropsDownChild;
