import React from 'react';
import Button from './components/Button';
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

const Portfolio = () => {
  return (
    <div className="Portfolio">
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
    </div>
  );
}

export default Portfolio;
