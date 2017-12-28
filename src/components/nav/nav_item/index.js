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

class NavItem extends Component {
	render() {
		const current = this.props.location.pathname.replace(/\/.*\//, '');
		const {
			className,
			children,
			match,
			tag: Tag
		} = this.props;
		const classes = classNames(
			'nav-li',
			current == children.label ? 'active' : '',
			className,
		);
		return (
			<Tag className={classes}>
			<Link to={`${match.url}/`+children.urlId}>{children.label}</Link>
			</Tag>
		)
	}
}
NavItem.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.object
};

NavItem.defaultProps = {
	tag: 'li'
};
export default NavItem;