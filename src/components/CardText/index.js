import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

class CardText extends Component {
	render() {
		const {
			children,
			className,
			tag: Tag,
			...attributes
		} = this.props;
		const classes = classNames(
			'ysg-card-text',
			className,
		);
		return (
			<Tag className={classes}>
			{children}
			</Tag>
		);
	}
}
CardText.PropTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,


}
CardText.defaultProps = {
	tag: 'p'
}
export default CardText;