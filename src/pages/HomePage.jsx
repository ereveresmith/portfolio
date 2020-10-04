import React, {useState} from 'react';
import Button from '../components/Button';
import Styled from 'styled-components';

const Grid = Styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const BottomAligned = Styled.div`
  align-self: end;
`

const TopAligned = Styled.div`
  align-self: baseline;
`

const HomePage = (props) => {
  const handleClick = () => {
    console.log('Clicked the button');
    props.onNext();
  }

  return (
    <Grid>
    <BottomAligned>
        <h1>Welcome</h1>
    </BottomAligned>
    <TopAligned>
        <Button 
        label={"Check out my portfolio"}
        color={'blue'}
        onClick={handleClick}
        / >
    </TopAligned>
    </Grid>
  );
}

export default HomePage;
