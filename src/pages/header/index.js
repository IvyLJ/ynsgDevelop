import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import classNames from 'classnames';
import './index.less';



class Header extends Component {

	render() {
		const current = this.props.location.pathname.replace(/\/.*\//, '');
		const {
			device
		} = this.props;
		const classes = classNames(
			'ysg-header',
			device == 'web' ? 'web' : 'app'
		);
		return (
			<header className={classes}>
				{device=='web'?'INDEX':current}
			</header>
		)
	}
}
export default Header;