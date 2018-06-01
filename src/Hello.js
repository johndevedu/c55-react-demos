import React from 'react';
import axios from 'axios';

// export default ({ name }) => <h1>Hello {name}!</h1>;

class BookList extends React.Component {
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=lord+of+rings',

    })
  }

  render(){
    return (
      <React.Fragment>
        <div></div>
      </React.Fragment>
    )
  }
}

export default BookList;