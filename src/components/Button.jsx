import React from 'react';
import Styled from 'styled-components';

const StyledButton = Styled.button`
  padding: 8px 16px;
  border-radius: 24px;
  margin: 8px;
  border-radius: 24px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  background-color: #9999ff;
  font-size: 14px;
  border: 0;
  cursor: pointer;
  outline: 0;
  transition: backgreound-color 250ms ease;

  &:hover {
    background-color: #8080ff;
  }

  &:active {
    background-color: #6666ff;
  }

  &:focus {
    outline: 1px #6666ff solid;
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

