import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './app/store.js';

import { ChakraProvider } from '@chakra-ui/react';
import { theme as baseTheme } from '@chakra-ui/theme';

const customTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: {
      500: '#ff4500',
    },
  },
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);

