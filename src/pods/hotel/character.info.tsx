import React from 'react';
import { Character } from 'pods/hotel-collection/api';
import { Box, Typography } from '@mui/material';
import "./styles.css";

interface Props {
  character: Character | undefined;
};

export const CharacterInfo: React.FC<Props> = (props) => {
  const {character} = props;


    if(!character) {
    return <h1>Loading...</h1>
  };

  return (
    <Box className="boxInfoCharacter">
      <Box className='secondBox'>
        <Box>
          <Typography>
            <b>Name:</b> {character?.name}{' '}
          </Typography>
          <img src={character?.image} alt="photo" />
        </Box>
        <Box className='box4'>
          <Typography> <b>Species:</b> {character?.species || "* Not Found *"}</Typography>
          <Typography> <b>Type:</b> {character.type || "* Not Found *"}</Typography>
          <Typography> <b>Best Sentence:</b> {character?.bestSentence || "* Not Found *"}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
