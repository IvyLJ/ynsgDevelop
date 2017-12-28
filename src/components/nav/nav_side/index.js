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

class NavSide extends Component {
	constructor(props) {
		super(props);
		this.state = {
				isToggleOn: false
			}
			// This binding is necessary to make `this` work in the callback
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
	render() {
		const {
			className,
			children,
			tag: Tag,
			...attributes
		} = this.props;
		const classes = classNames(
			'nav-side-ul',
			className
		);
		return (
			<div className='nav-side'>
			<button onClick={this.handleToggle} className="">toggle</button>
			{this.state.isToggleOn?<Tag className={classes} >

				<li className='nav-li'>
					<Link to='/index'>index</Link>
				</li>
				{children.slice(1).map((res,index)=>{
					return(
						<NavItem key={index} {...attributes}>{res}</NavItem>
					);
				})}	
				
			</Tag>:null}
			
			</div>
		)
	}
}
NavSide.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.array
};

NavSide.defaultProps = {
	tag: 'ul'
};
export default NavSide;