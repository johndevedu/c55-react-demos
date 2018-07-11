import React from "react";

class LiftingStateUpChild extends React.Component {
  constructor(props) {
    super(props);

    this.state;

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  //this onButton click handler can be used instead for the onClick attribute
  onButtonClick(e) {
    //optionally child does whatever it wants to do
    this.setState({
      hasButtonBeenClicked: true
    });
    //step 3: use the function that was passed in from parent
    this.props.onChildButtonClickPassedAsProps(this.state.inputText);
  }

  onInputChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "red", padding: "10px" }}>
        <pre>
          {"\u2193"} receiving this.props with onChildButtonClickPassAsProps
          (invisibly the line below happens)<br />
          this.props ={" "}
          {
            "{onChildButtonClickPassedAsProps: function onChildButtonClick()... -- bound to parent component}"
          }
        </pre>
        <h1>Child</h1>
        <input type="text" onChange={this.onInputChange} />
        <button
          type="button "
          class="btn"
          onClick={this.onButtonClick}
          disabled={!this.state}
        >
          click me after typing something in
        </button>
        {/*
        <button
          type="button"
          onClick={event =>
            this.props.onChildButtonClickPassedAsProps(
              this.state.inputText,
              event
            )
          }
        >
          click me
        </button>
        */}
        <pre>child state: {JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}

export default LiftingStateUpChild;
