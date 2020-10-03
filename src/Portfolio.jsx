import React, {useState} from 'react';
import Styled from 'styled-components';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';

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
  const [page, setPage] = useState('start');

  const handleGotoHome = () => {
    setPage('home');
  }

  const renderPage = () => {
    switch(page) {
      case 'start': 
        return <StartPage onNext={handleGotoHome}></StartPage>;
      case 'home': 
        return <HomePage></HomePage>;
      case 'default': 
        return <StartPage></StartPage>;
    }
  }

  return (
    <div className="Portfolio">
      {renderPage()}
    </div>
  );
}

export default Portfolio;
