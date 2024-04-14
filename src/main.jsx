import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.jsx';
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import favicon16 from './assets/favicon/favicon-16x16.png';
import favicon32 from './assets/favicon/favicon-32x32.png';
import { LeaderContextProvider } from './contexts/LeaderContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeaderContextProvider>
      <HelmetProvider>
        <Helmet>
          <title>Space Game</title>
          <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
          <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        </Helmet>
        <App />
      </HelmetProvider>
    </LeaderContextProvider>
  </React.StrictMode>
);
