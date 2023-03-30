import * as apiModel from './api/rickAndMorty.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name, 
  status: character.status,
  image: character.image,
  species: character.species,
  type: character.type,
  gender: character.gender,
  bestSentence: character?.bestSentence,
});
