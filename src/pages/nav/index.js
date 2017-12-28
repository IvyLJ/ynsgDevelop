import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import Routes from '../router.js';
import {
	Nav
} from 'ysgreact';

class NavBar extends Component {

	render() {
		return (
			<Nav {...this.props}>{Routes}</Nav>

		)
	}
}
export default NavBar;