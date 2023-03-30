import * as React from 'react';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
 
import { Character } from './api';

interface Props {
  characterCollections: Character[];
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}



export const CharacterCollectionComponent: React.FunctionComponent<Props> = ( props) => {


  const { characterCollections, onEdit, onDelete } = props;


  return (
    <div className={classes.root}>

      <ul className={classes.list}>
        {characterCollections &&
          characterCollections.map((character) => (
            <li key={character.id}>
              <CharacterCard
                character={character}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
