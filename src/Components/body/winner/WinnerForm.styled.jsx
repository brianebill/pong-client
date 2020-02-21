import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  text-align: center;
  max-width: 400px;
  margin: auto;
`;

export const Input = styled.input`
  margin: 10px 10px;
  width: 80%;
  height: 30px;
  padding: 2px 5px;
  font-size: 16px;
  background-color: black;
  border: 1px solid lime;
  color: lime;
  &::-webkit-input-placeholder {
    color: lime;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  display: block;
  margin: auto;
  background-color: black;
  color: lime;
  width: 85%;
  height: 40px;
  border: 1px solid lime;
  border-radius: 5px;
`;