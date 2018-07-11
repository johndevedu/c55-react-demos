import React from "react";
import axios from "axios";

class ListItemsWithEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      selectedItem: null
    };

    this.onItemClick = this.onItemClick.bind(this);
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

  onItemClick(item, e) {
    this.setState({ selectedItem: item });
  }

  render() {
    const list = this.state.data.items
      ? this.state.data.items.map(item => {
          return (
            <li key={item.id} onClick={e => this.onItemClick(item, e)}>
              {item.volumeInfo.title}
            </li>
          );
        })
      : "is loading";

    return (
      <div>
        <h1>List Items Demo!</h1>
        <p>click on one of the list items below</p>
        <ul>{list}</ul>
        {this.state.selectedItem && (
          <div>
            <label>selected item: </label>
            <pre>{this.state.selectedItem.volumeInfo.title}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default ListItemsWithEvent;
