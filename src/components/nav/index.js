import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavTop from './nav_top';
import NavSide from './nav_side';

class Nav extends Component {

	render() {
		const {
			device,
			className,
			children,
			tag: Tag,
			...attributes
		} = this.props;
		const classes = classNames(
			'ysg-nav',
			className,
		);
		return (
			<Tag className={classes}>
			{device=='app'?
				<NavTop className='bottom' {...attributes}>{children}</NavTop>:
				<NavTop className='top'  {...attributes}>{children}</NavTop>
			}
			</Tag>
		)
	}
}
Nav.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.array,
	device: PropTypes.string
};

Nav.defaultProps = {
	tag: 'nav'
};
export default Nav;