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



// # type Character {
// #   id: Int
// #   name: String
// #   status: String
// #   image: String
// #   species: String
// #   type: String
// #   gender: String
// # }

// # type Query {
// #   characters: [Character]
// #   character(id: Int!): Character
// # }



