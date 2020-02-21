import React from 'react';
import {
  Title,
  Subtitle,
} from 'Components';

export const Header = () => (
  <>
    <Title inlineBool={true}>
      PONG 
    </Title>
    <Subtitle inlineBool={true} marginStr="0 0 0 5px">
      by BRIAN
    </Subtitle>
  </>
)