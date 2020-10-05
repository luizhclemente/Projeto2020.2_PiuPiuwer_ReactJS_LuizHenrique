import React from 'react';
import Routes from './routes/index';

import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks/index';
// import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>


  );
}

export default App;
