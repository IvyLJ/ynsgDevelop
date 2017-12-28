import 'babel-polyfill'; //低配置浏览器不支持es6语法，This will emulate a full ES2015+ environment
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app.js';
import './index.less';
import './static/js';

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);