import "@babel/polyfill";
import React from 'react';
// import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {AppRoute} from './routes';
// import {ConfigureStore} from './store/ConfigureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/index.css';
// import './public/assets/styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
// import {getToken} from "./utils/TokenManager";
// import { setUserData } from './actions/AuthAction';
// import 'react-table/react-table.css'
// import './public/assets/styles/custom.css';
// import reportWebVitals from './reportWebVitals';

// const store = ConfigureStore();

let token = "asd";
// if (typeof token !== 'undefined' && token !== 'undefined' && token) {
//     store.dispatch(setUserData(token));
// }

render (
    <React.StrictMode>
      <AppRoute token={token} />
    </React.StrictMode>,
    // <Provider store={store}>
    //     <AppRoute/>
    // </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
