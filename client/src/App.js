import React from 'react';
import BookList from './components/BookList';
import { useQuery } from '@apollo/client';
import { BOOKS_QUERY } from './graphql/query';
import './App.css';

function App() {
  const {loading, error, data} = useQuery(BOOKS_QUERY);
  return (
    <div id="main">
      <h1>Hello!</h1>
      {loading ? <div>LOADING</div> : <BookList data={data}/>}
    </div>
  );
}


export default App;