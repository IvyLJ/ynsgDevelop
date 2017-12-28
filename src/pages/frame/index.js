import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import Nav from '../nav';
import Header from '../header';
import Routes from '../router.js';
import './index.less';
import Device from '../../static/js/device.js';

class FrameContent extends Component {
	constructor(props) {
		super(props);
	}
	render() {


		const {
			match
		} = this.props;
		return (
			<div className="ysg-frame-content">
				{Routes.map((res,index)=>{
					return(
						<div className='ysg-container' key={index}>
						{res.urlId===match.params.pageId?<res.component device={Device} {...this.props}/>:null}
						</div>	
					);
				})}
			</div>
		);
	}
}
class Frame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			device: ''
		}
	}
	componentWillMount() {
		let width = window.innerWidth,
			height = window.innerHeight,
			device = '';
		device = (width >= height) ? 'web' : 'app';
		this.state.device = device;
	}
	render() {
		const {
			match
		} = this.props;
		return (
			<div className='ysg-wrapper'>
				<Header  device={this.state.device} {...this.props}/>
				<Nav {...this.props} device={this.state.device}/>
				<Route path={`${match.url}/:pageId`} component={FrameContent}/>
				
			</div>
		)
	}
}
export default Frame;