import { Character } from './rickAndMorty.api-model';

let dataInfo = function characters() {
  return fetch('http://localhost:3000/results') 
    .then((response) => response.json())
    .then((res) => {
      return res;
    });
};


export const getCharacterCollection = async (): Promise<Character[]> => {
  const data = await dataInfo(); 
  return data as Character[]; 
};


