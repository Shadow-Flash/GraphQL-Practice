import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`{
    books{
      name
      id
    }
}`
