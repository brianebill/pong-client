import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 800;
  font-size: 28px;
  margin: 0;
  ${({ sizeInt }) => sizeInt && `font-size: ${sizeInt}px;`}
  ${({ inlineBool }) => inlineBool && `display: inline-block;`}
  ${({ colorStr }) => colorStr && `color: ${colorStr};`}
  ${({ marginStr }) => marginStr && `margin: ${marginStr};`}
`;