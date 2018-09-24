import React from 'react';
import {Text} from 'react-native';
import {Container, TextInput, Seperator} from '../../styles'

export default class NewBlog extends React.Component {
  render() {
    return (
      <Container>
        <TextInput
          placeholder={'Title'}
          h1
        />

        <Seperator/>

        <TextInput
          placeholder={'Start typing'}
        />
      </Container>
    );
  }
}