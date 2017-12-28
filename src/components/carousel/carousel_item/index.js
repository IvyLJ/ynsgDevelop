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

class CarouselItem extends Component {
	render() {
		const {
			className,
			children,
			itemId,
			tag: Tag
		} = this.props;
		const classes = classNames(
			'ysg-carousel-item',
			itemId === this.context.activeItem ? 'active' : '',
			className,
		);
		return (
			<Tag className={classes}>
				<img className='ysg-carousel-item-img' src={children.url}/>
				<p className='ysg-carousel-item-title'>{children.title}</p>
				<div className='ysg-carousel-item-mask'></div>
			</Tag>
		);
	}
}
CarouselItem.PropTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	itemId: PropTypes.number
}
CarouselItem.defaultProps = {
	tag: 'div'
}
CarouselItem.contextTypes = {
	activeItem: PropTypes.any
};
export default CarouselItem;