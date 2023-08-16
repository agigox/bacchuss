import React from 'react';
import AppLayout from './components/AppLayout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --bac-darkBlue: rgba(16, 51, 81, 1);
    --bac-blue: rgba(0, 156, 223, 1);
    --bac-white: rgba(255, 255, 255, 1);
    --bac-widgetBackground: rgba(227, 244, 252, 1);
    --bac-grayText: #11161A;
    --bac-gray: #E8E8E8;
  }
`;
const App = () => {
  return (
    <React.Fragment>
        <GlobalStyle />
        <AppLayout />
    </React.Fragment>
  );
};

export default App;
