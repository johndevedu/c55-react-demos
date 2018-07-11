import React from "react";
import axios from "axios";

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
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
    const list = this.state.data.items
      ? this.state.data.items.map(item => {
          return <li key={item.id}>{item.volumeInfo.title}</li>;
        })
      : "is loading";

    // const list = this.state.data.items && this.state.data.items.map(item => {
    //     return <li>item.volumeInfo.title</li>;
    // })

    return (
      <div>
        <h1>List Items Demo!</h1>
        <pre>{list}</pre>
      </div>
    );
  }
}

export default ListItems;
