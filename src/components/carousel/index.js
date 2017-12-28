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
import CarouselItem from './carousel_item';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 0,
			maxLength: 2
		}
	}
	componentDidMount() {
		setInterval(() => {
			this.next();
		}, 3000);
	}
	next() {
		const nextItem = this.state.activeItem + 1;
		if (nextItem >= this.state.maxLength) {
			this.setState({
				activeItem: 0
			});
		} else {
			this.setState({
				activeItem: nextItem
			});
		}
	}
	getChildContext() {
		return {
			activeItem: this.state.activeItem
		};
	}
	render() {
		const {
			className,
			imgData,
			animation,
			control,
			inner,
			children,
			tag: Tag,
			...attributes
		} = this.props;
		const classes = classNames(
			'ysg-carousel',
			className,
		);
		return (
			<Tag className={classes}>
				{imgData.map((res, index) => {
					return (
						<CarouselItem key={index} itemId={index} {...attributes}>{res}</CarouselItem>
					);
				})}
			</Tag>
		);
	}
}
Carousel.PropTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
	imgData: PropTypes.array,
	animation: PropTypes.string,
	control: PropTypes.bool,
	inner: PropTypes.bool

}
Carousel.defaultProps = {
	tag: 'div'
}
Carousel.childContextTypes = {
	activeItem: PropTypes.any
};
export default Carousel;