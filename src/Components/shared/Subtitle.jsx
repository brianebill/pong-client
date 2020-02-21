import styled from 'styled-components';

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  ${({ sizeInt }) => sizeInt && `font-size: ${sizeInt}px;`}
  ${({ inlineBool }) => inlineBool && `display: inline-block;`}
  ${({ colorStr }) => colorStr && `color: ${colorStr};`}
  ${({ marginStr }) => marginStr && `margin: ${marginStr};`}
`;