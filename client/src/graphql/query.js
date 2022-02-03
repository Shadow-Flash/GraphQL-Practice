import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`{
    books{
      name
      id
    }
}`

export const BOOK_QUERY = gql`{
    book($id:){
      name
      id
    }
}`

