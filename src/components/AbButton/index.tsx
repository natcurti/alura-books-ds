import React from 'react';
import styled, { css } from 'styled-components';

export interface AbButtonProps {
  text?: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}

const StyledButton = styled.button<AbButtonProps>`
  background: ${(props: AbButtonProps) =>
    props.type === 'primary' ? '#eb9b00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbButtonProps) =>
    props.type === 'primary' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;

  ${(props: AbButtonProps) =>
    props.type === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const AbButton = ({
  text,
  type = 'primary',
  onClick,
}: AbButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};
