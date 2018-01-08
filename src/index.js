import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Go shopping", "Practice mindfulness", "Make something in React"];


ReactDOM.render(<MyList theList={toDos}/>,
  document.getElementById('root')
);
