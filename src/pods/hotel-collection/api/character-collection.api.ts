// import { Character } from './rickAndMorty.api-model';
// import { useQuery } from '@apollo/client';
// import { GET_ALL } from '../../../../server/Graphql/schema';
// import { useRef } from 'react';


// export const CharacterGraphQL = () => {


//   const getCharacterCollection = async (): Promise<Character[]> => {
//     const {data}  = await useQuery(GET_ALL); // ejecutas la consulta con useQuery
//     const characters = data?.characters?.results; // obtienes los datos de los personajes
//     return characters as Character[]; // los devuelves como un array de Character
//   };

//   return {
//     getCharacterCollection,
//   };
// };

// // ? export const CharacterGraphQL = () => {
// //   const getCharacterCollection = async (): Promise<Character[]> => {
// //     const { data } = await useQuery(GET_ALL); // ejecutas la consulta con useQuery
// //     const characters = data.characters.results; // obtienes los datos de los personajes
// //     return characters as Character[]; // los devuelves como un array de Character
// //   };

// //   return {
// //     getCharacterCollection,
// //   };
// // };

// // let dataInfo = function characters() {
// //   return fetch('http://localhost:3000/results') 
// //     .then((response) => response.json())
// //     .then((res) => {
// //       return res;
// //     });
// // };


// // export const getCharacterCollection = async (): Promise<Character[]> => {
// //   const data = await dataInfo(); 
// //   return data as Character[]; 
// // };





// // código nuevo
//   //  const { loading, error, data } = useQuery(GET_ALL);
//   //  console.log('Aquí', data.characters.results);
