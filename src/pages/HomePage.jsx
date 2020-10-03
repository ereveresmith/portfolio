import React, {useState} from 'react';
import Button from '../components/Button';
import Styled from 'styled-components';

const handleClick = () => {
  console.log('Clicked the button');
}

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

const HomePage = () => {
  return (
    <Grid>
      <h1>Projects</h1>
    </Grid>
  );
}

export default HomePage;
