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
import NavItem from '../nav_item';
import './index.less';

class NavTop extends Component {
	render() {
		const {
			className,
			children,
			tag: Tag,
			...attributes
		} = this.props;
		const classes = classNames(
			'nav-ul',
			className,
		);
		return (
			<Tag className={classes}>
				<li className="nav-li"><Link to='/index'>index</Link></li>
				{children.slice(1).map((res,index)=>{
					return(
						<NavItem key={index} {...attributes}>{res}</NavItem>	
					);
				})}		
			</Tag>
		)
	}
}
NavTop.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.array
};

NavTop.defaultProps = {
	tag: 'ul'
};
export default NavTop;