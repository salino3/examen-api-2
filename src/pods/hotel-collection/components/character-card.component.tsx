import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import { Link } from 'react-router-dom';
import * as classes from './character-card.styles';

 

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number | string) => void;
  onDelete: (id: number | string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;

  return (
    <>
      <Card>
        <CardHeader
          title={character.name}
          subheader={character.species}
        />
        <CardContent>
          <div className={classes.content}>
            <Link to={`/characters/moreinfo/${character.id}`}>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{ height: 0, paddingTop: '56.25%' }}
              />
            </Link>
            <Typography variant="subtitle1" gutterBottom>
              {character.type}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => onEdit(character && character?.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(character && character?.id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
