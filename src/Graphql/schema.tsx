import { gql } from "@apollo/client";


export const GET_ALL = gql`
 query characters {
  characters{
    results {
     id
  name
  status
  image
  species
  type
  gender
    }
  }
}`;

