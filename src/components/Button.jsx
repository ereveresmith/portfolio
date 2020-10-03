import React from 'react';
import Styled from 'styled-components';

const StyledButton = Styled.button`
  padding: 16px;
  margin: 8px;
  border-radius: 6px;
  color: #353535;
  font-weight: 500;
  background-color: white;
  font-size: 18px;
  border: 3px solid #7b7b7b;
  cursor: pointer;
  outline: 0;
  transition: backgreound-color 250ms ease;

  &:hover {
    background-color: #ccebff;
  }

  &:active {
    background-color: #99d6ff;
    border-color: #666666;
  }

  &:focus {
    outline: 1px #33adff solid;
  }

`;

const Button = (props) => {
  return (
    <StyledButton className="Button" onClick={props.onClick}>
      {props.label}
    </StyledButton>
  );
}

export default Button;

