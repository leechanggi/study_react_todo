import React from 'react';
import ThemeContextProvider from './context/ThemeContextProvider';

import './App.scss';

import Container from './components/common/Container';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Container></Container>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
