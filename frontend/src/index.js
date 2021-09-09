import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/app.css';
import Root from './js/app';

const App = () => {
  return (
    <Root />
  );
};
ReactDOM.render(<App />, document.getElementById('root'));