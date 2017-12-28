import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import classNames from 'classnames';
import './index.less';



class About extends Component {

	render() {
		const {
			device
		} = this.props;
		return (
			<div className='ysg-about'>
				about
			</div>
		)
	}
}
export default About;