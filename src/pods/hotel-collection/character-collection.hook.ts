import * as React from 'react';
import { Character } from './api';
import { mapCharacterFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../../Graphql/schema';

export const useCharactersCollection = () => {
  
  const { loading, error, data } = useQuery(GET_ALL);

  const [charactersCollection, setCharactersCollection] = React.useState<
    Character[]
  >([]);

  const loadCharacterCollection = () => {
    if (!loading && !error && data) {
      const results = data.characters.results;
      const characters = mapToCollection(results, mapCharacterFromApiToVm);
      setCharactersCollection(characters);
    }
  };

  React.useEffect(() => {
    loadCharacterCollection();
  }, [loading, error, data]);

  
  return {
    charactersCollection,
    loadCharacterCollection,
  };
};
