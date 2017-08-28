/*
* @Author: RayLin
* @Date:   2017-08-23 13:48:44
* @Last Modified by:   RayLin
* @Last Modified time: 2017-08-24 15:40:33
*/

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './normalize.css';
import './index.css';
import App from './App';


injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
