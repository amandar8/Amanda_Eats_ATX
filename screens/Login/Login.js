import React from 'react';
import {Text, TextInput, FormControl, Button} from '../../styles';
import {Title, LoginWrapper, FormContainer } from './Login.style';

export default function Login({navigation}){
  return (
    <LoginWrapper>
      <Title h4> Sign in to start blogging </Title>
      <FormContainer>
        <FormControl>
          <TextInput
            placeholder={'Email address'}
            keyboardType={'email-address'}
          />
        </FormControl>
        <FormControl>
          <TextInput
            placeholder={'Password'}
            secureTextEntry
            />
        </FormControl>
      </FormContainer>

      <Button 
        info 
        title={'Login'}
        onPress={() => navigation.navigate('Blogs')}
      />
  </LoginWrapper>
  );
}