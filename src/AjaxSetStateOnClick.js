import React from "react";
import axios from "axios";

class AjaxSetStateOnClick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes?q=lord+of+rings"
    }).then(response => {
      this.setState({
        data: response.data
      });
    });
  }

  onChangeHandler(value) {
    // const target = e.target;
    // const name = target.name;
    // const value = target.value;

    console.log(value);
  }

  render() {
    return (
      <div>
        <h1>Ajax demo!</h1>
        <pre>{JSON.stringify(this.state.data)}</pre>
        <select onChange={this.onChangeHandler}>
          <option value="1">Name A</option>
          <option value="2">Name B</option>
          <option value="3">Name C</option>
        </select>
      </div>
    );
  }
}

export default AjaxSetStateOnClick;
