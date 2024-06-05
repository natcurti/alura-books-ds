import React from 'react';
import styled from 'styled-components';

export interface IAbCard {
  text?: string;
}

const CardStyled = styled.div`
  padding: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const AbCard = ({ text }: IAbCard) => {
  return <CardStyled>{text}</CardStyled>;
};
