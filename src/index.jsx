import ReactDOM from 'react-dom/client';
import './index.css';
import TopMenu from './TopMenu';
import React from 'react';
import Slider from './Slider'
import SideTitle from './SideTitle';
import Formulario from './Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='extender'>
      <div className='wrapper'>
        <TopMenu />
        <SideTitle />
        <Slider />
        <Formulario />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals