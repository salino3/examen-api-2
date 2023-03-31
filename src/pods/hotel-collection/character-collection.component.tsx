import * as React from 'react';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
 
import { Character } from './api';

interface Props {
  characterCollections: Character[];
}


export const CharacterCollectionComponent: React.FunctionComponent<Props> = ( props) => {
  const { characterCollections } = props;


  return (
    <div className={classes.root}>

      <ul className={classes.list}>
        {characterCollections &&
          characterCollections.map((character) => (
            <li key={character.id}>
              <CharacterCard
                character={character}
    
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
