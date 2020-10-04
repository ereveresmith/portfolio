import React, {useState} from 'react';
import Styled from 'styled-components';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';

const Portfolio = () => {
  const [page, setPage] = useState('home');

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
