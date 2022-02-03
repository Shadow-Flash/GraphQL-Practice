import React, { Component } from 'react';

export default class BookList extends Component {
  render() {
    let data = this.props.data;
    return (<div>
        <ul id="book-list">
        {
            data.books.map((book,id) => {
                return <li key={id}>{book.name}</li>
            })
        }
        </ul>
    </div>);
  }
}
