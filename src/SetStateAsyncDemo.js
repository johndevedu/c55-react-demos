import React from "react";

class SetStateAsyncDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      something: "value",
      isButtonClicked: false
    };

    this.btnHandler = this.btnHandler.bind(this);
    this.anotherFunction = this.anotherFunction.bind(this);
  }

  anotherFunction(incomingObj) {
    incomingObj.newProp = "new prop added!";
    return incomingObj;
  }

  btnHandler(e) {
    // this.setState({
    //   isButtonClicked: true
    // }, () => console.log(this.state.isButtonClicked))
    //console.log(this.state.isButtonClicked);

    //toggle example
    if (this.state.isButtonClicked) {
      this.setState({
        isButtonClicked: false
      });
    } else {
      this.setState({
        isButtonClicked: false
      });
    }

    this.setState(prev => {
      return {
        isButtonClicked: !prev.isButtonClicked
      };
    });

    // let myObj = {}
    // const newObj = this.anotherFunction(myObj)
    // console.log(newObj);
  }

  render() {
    return (
      <React.Fragment>
        <h1>hello</h1>
        <button onClick={this.btnHandler}>click me</button>
      </React.Fragment>
    );
  }
}

export default SetStateAsyncDemo;
