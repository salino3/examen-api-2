import  React from 'react';
import { CharacterInfo } from 'pods/hotel';
import { useParams } from 'react-router-dom';
import { AppLayout } from 'layouts';
import { useCharactersCollection } from 'pods/hotel-collection/character-collection.hook';
import { Character } from 'pods/hotel-collection/api';


export const MoreInfo: React.FC = () => {

  const { charactersCollection, loadCharacterCollection } = useCharactersCollection();

  const [character, setCharacter] = React.useState<Character | undefined>();

  const { id } = useParams();

    React.useEffect(() => {
      loadCharacterCollection();
    }, []);

React.useEffect(() => {
  const foundCharacter = charactersCollection.find(
    (item) => item.id === Number(id)
  );
    setCharacter(foundCharacter);
}, [charactersCollection, id]);



  return (
    <AppLayout>
      <CharacterInfo character={character} />
    </AppLayout>
  );
}
