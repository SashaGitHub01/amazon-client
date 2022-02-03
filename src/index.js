import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { setupStore } from './store/index';
import { BrowserRouter } from 'react-router-dom'

const store = setupStore()

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);

reportWebVitals();