import React from 'react';
import { Provider } from 'Store';
import {
  DatabaseProvider,
  Header,
  Body,
} from 'Components';
import * as S from './App.styled';

export const App = () => (
  <DatabaseProvider>
    <Provider>
      <S.Container>
        <Header />
        <Body />
      </S.Container>
    </Provider>
  </DatabaseProvider>
  
);
