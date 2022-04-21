
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowCircleRight, faArrowCircleDown, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


import Maze from './maze.js';


const root = document.createElement('div');
root.setAttribute('id','root');
root.setAttribute('class', 'body');

document.body.append(root);

library.add(faArrowCircleUp, faArrowCircleRight, faArrowCircleDown, faArrowCircleLeft);

ReactDOM.render(<Maze />, document.getElementById('root'));
