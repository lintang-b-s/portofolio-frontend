import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { ThemeProvider } from "@material-tailwind/react";

=======
>>>>>>> upstream/main

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ThemeProvider>
      <Provider store={store}>
        
          <App />
        
      </Provider>
    </ThemeProvider>
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> upstream/main
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
