import styled from 'styled-components';

export const Box = styled.div`
  margin: 20px 0;
  padding-bottom: 30px;
  border: dotted 2px lime;
  ${({ colorStr }) => colorStr ? `border-color: ${colorStr}` : ''}
`;
