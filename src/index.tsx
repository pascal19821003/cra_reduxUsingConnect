import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Provider } from 'react-redux'
import  store from './redux/store';
import TodoApp from './TodoApp';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <FluentProvider theme={webLightTheme}>
  //   <App />
  // </FluentProvider>
  <Provider store={store}>
    <TodoApp/>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
