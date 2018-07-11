import React from "react";
import axios from "axios";

class AjaxSetStateOnLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  render() {
    return (
      <div>
        <h1>Ajax demo!</h1>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default AjaxSetStateOnLoad;
