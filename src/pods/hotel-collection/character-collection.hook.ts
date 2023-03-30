import * as React from 'react';
import { Character, getCharacterCollection } from './api';
import { mapCharacterFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharactersCollection = () => {


  const [charactersCollection, setCharactersCollection] = React.useState<
    Character[]
  >([]);

  

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharactersCollection(mapToCollection(result, mapCharacterFromApiToVm))
    );
  };

  

  return {
    charactersCollection,
    loadCharacterCollection,
  };
};
