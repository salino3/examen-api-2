import { Character } from './api/rickAndMorty.api-model';

export const mapCharacterFromApiToVm = (character: Character): Character => ({
  ...character,
  id: character?.id,
  name: character?.name,
  status: character?.status,
  species: character?.species,
  type: character?.type,
  gender: character?.gender,
  bestSentence: character?.bestSentence,
});

export const mapCharacterFromVmToApi = (character: Character): Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  bestSentence: character.bestSentence
}) 
