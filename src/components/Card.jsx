import React, {useState} from 'react';
import Button from '../components/Button';
import Styled from 'styled-components';

const handleClick = () => {
  console.log('Clicked the button');
}

const Wrapper = Styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 2fr;
  border: 2px solid #f5f5f5;
  height: 240px;
  box-shadow: 3px 3px 10px #d9d9d9;
`

const InnerText = Styled.span`
  align-text: center;
  margin: 16px 24px;
  max-width: 400px;
`


const Card = (props) => {
  return (
    <Wrapper>
        <InnerText>
          <h2>{props.title}</h2>
          {props.content}
          <Button label={"See more"}></Button>
        </InnerText>
    </Wrapper>
  );
}

export default Card;
