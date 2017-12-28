import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import MenuList from '../menulist';

class Newest extends Component {
	render() {
		const newestData = [{
			'linkPath': '/ysg/product#a',
			'srcPath': '',
			'text': 'Newest-a-new'
		}, {
			'linkPath': '/ysg/product#b',
			'srcPath': '',
			'text': 'Newest-b-new'
		}, {
			'linkPath': '/ysg/product#c',
			'srcPath': '',
			'text': 'Newest-c-new'
		}]
		return (
			<MenuList data={newestData}/>
		)
	}
}
export default Newest;