import React from 'react';
import Button from '@mui/material/Button';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Character } from './api';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  const navigate = useNavigate();

  const onSave = async (values: any) => {
    values.preventDefault();

    const updatedCharacter = { ...character, bestSentence: bSentece };

    try {
      const response = await fetch(
        `http://localhost:3000/results/${character?.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCharacter),
        }
      ).then((res) => {
        console.log(
          'Character updated successfully!',
          updatedCharacter.bestSentence
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        navigate('/');
      });
    } catch (error) {
      console.error('Error updating character:', error);
    }
  };

  const [bSentece, setBSentece] = React.useState(character?.bestSentence || '');

  return (
    <>
      <h2>{character?.name}</h2>

      <Formik
        onSubmit={() => {}}
        initialValues={bSentece || ''}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        <Form className={classes.root}>
          <TextFieldComponent
            required
            value={(bSentece && bSentece) || ''}
            onChange={(event) => setBSentece(event.target.value)}
            name="bestSentece"
            label="bestSentece"
          />
          <Button
            onClick={(values) => onSave(values)}
            type="submit"
            variant="contained"
            color="primary"
            disabled={bSentece ? false : true}
          >
            Save
          </Button>
        </Form>
      </Formik>
    </>
  );
};
