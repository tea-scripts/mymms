import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebar-context';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ChakraProvider>
  </React.StrictMode>
);
