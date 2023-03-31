import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharactersCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../../../server/Graphql/schema';



export const CharacterCollectionContainer = () => {
  
   const { loading, error, data } = useQuery(GET_ALL);


  let { charactersCollection, loadCharacterCollection } = useCharactersCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);



  const handleEdit = (id: string ) => {
    navigate(linkRoutes.editCharacter(id));
  };

  
  const handleDelete = async (id: string | number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };
  


  const deleteCharacter = async (
   id: number | string
 ): Promise<boolean> => {
   charactersCollection = charactersCollection.filter((c) => c.id !== id);
   return true;
 };

 
  return (
      <CharacterCollectionComponent
        onEdit={handleEdit}
        onDelete={handleDelete}
        characterCollections={charactersCollection}
      />
  );
};
