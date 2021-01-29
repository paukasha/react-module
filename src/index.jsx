import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComp } from './Header';

window.addEventListener('load', () => {
    ReactDOM.render(<HeaderComp />, document.getElementById('react_root'));
});
