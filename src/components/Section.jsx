import React from 'react';
import Styled from 'styled-components';
import { Styles } from '../util/Styles'

const StyledDiv = Styled.div`
  background-color: ${Styles.colors.purple};
  width: 100%;
  display: grid;
  min-height: 100px;
  justify-items: center;
  align-items: center;
`;

const Section = (props) => {
  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  );
}

export default Section;

