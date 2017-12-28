import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';

class Card extends Component {

	render() {
		const {
			className,
			href,
			children,
			tag: Tag,
			...attributes
		} = this.props;
		const pathname = window.location.pathname.replace(/\/.*?\//, '');
		const classes = classNames(
			'ysg-card',
			className,
		);
		return (
			<Link to={href+'&from='+pathname} className={classes}>
			{children}
			</Link>
		);
	}
}
Card.PropTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,


}
Card.defaultProps = {
	tag: 'a'
}
export default Card;