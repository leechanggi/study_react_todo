import React from 'react';
import Container from './components/common/Container';
import ThemeContextProvider from './context/ThemeContextProvider';
import './App.scss';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Container />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
