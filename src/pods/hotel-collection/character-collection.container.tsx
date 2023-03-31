import * as React from 'react';
import { useCharactersCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';


export const CharacterCollectionContainer = () => {
  

  let { charactersCollection, loadCharacterCollection } = useCharactersCollection();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);


  return (
      <CharacterCollectionComponent
        characterCollections={charactersCollection}
      />
  );
};
