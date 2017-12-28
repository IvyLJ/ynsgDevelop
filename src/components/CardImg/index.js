import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

class CardImg extends Component {
	render() {
		const {
			children,
			className,
			tag: Tag,
			...attributes
		} = this.props;
		const classes = classNames(
		'ysg-card-img',
			className,
		);
		return (
			<Tag className={classes}>
			{children}
			</Tag>
		);
	}
}
CardImg.PropTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,


}
CardImg.defaultProps = {
	tag: 'div'
}
export default CardImg;