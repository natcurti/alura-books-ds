import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section<{ selected: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#FFFFFF'};
  border: 1px solid;
  border-color: ${props => (props.selected ? '#002F52' : '#EB9B00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selected ? '#FFF' : '#EB9B00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selected ? '#FFF' : '#EB9B00')};
    font-weight: 700;
    font-size: 16px;
  }
  footer {
    color: ${props => (props.selected ? '#FFF' : 'rgba(0, 0, 0, 0.54)')};
    font-weight: 400;
    font-size: 12px;
  }
`;

export interface IAbOptions {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface IAbOptionsGroup {
  options: IAbOptions[];
  defaultValue?: IAbOptions | null;
  onChange?: (option: IAbOptions) => void;
}

export const AbOptionsGroup = ({
  options,
  onChange,
  defaultValue,
}: IAbOptionsGroup) => {
  const [selectedOption, setSelectedOption] = useState<IAbOptions | null>(
    defaultValue ?? null
  );

  const handleSelect = (option: IAbOptions) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      {options.map(option => (
        <StyledSection
          key={option.id}
          selected={selectedOption?.id == option.id}
          onClick={() => handleSelect(option)}
        >
          <header>{option.title}</header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>{option.footer}</footer>
        </StyledSection>
      ))}
    </>
  );
};
