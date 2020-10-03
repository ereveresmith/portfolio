import React from 'react';
import Styled from 'styled-components';

const StyledButton = Styled.button`
  padding: 16px;
  margin: 8px;
  border-radius: 6px;
  color: #353535;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid grey;
  outline: 0;
  cursor: pointer;
  transition: backgreound-color 250ms ease;

  &:hover {
    background-color: #6699ff;
    color: white;
  }

  &:focus {
    background-color: #4d88ff;
    color: white;
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

