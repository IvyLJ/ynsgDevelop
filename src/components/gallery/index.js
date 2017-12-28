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
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll/build/iscroll-probe';
import './index.less';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				mouseWheel: true,
				scrollbars: false,
				scrollX: true,
				preventDefault: true,
				bounce: true,
				probeType: 1

			}
		}
		this.onScrollEnd = this.onScrollEnd.bind(this);
	}
	onScrollEnd() {
		this.setState({
			options: {
				mouseWheel: true,
				scrollbars: false,
				scrollX: true,
				preventDefault: false,
				bounce: true,
				probeType: 1

			}
		})
	}

	render() {
		const {
			children,
			className,
			tag: Tag
		} = this.props;
		const classes = classNames(
			'ysg-gallery',
			className
		)
		return (
			<Tag className={classes}>
			<ReactIScroll iScroll={iScroll}
                    options={this.state.options}
                    onScrollEnd={this.onScrollEnd}>
                    <div className='ysg-gallery-wrapper'>
				{children}
				</div>
			</ReactIScroll>
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