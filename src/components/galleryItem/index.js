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
import './index.less';

class Gallery extends Component {
	render() {
		const {
			children,
			className,
			tag: Tag
		} = this.props;
		const classes = classNames(
			'ysg-gallery-item',
			className
		)
		return (
			<Tag className={classes}>
			
                 
				{children}
				
			</Tag>
		);
	}
}
Gallery.PropTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node
};
Gallery.defaultProps = {
	tag: 'div'
}
export default Gallery;