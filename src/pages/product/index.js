import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';

const productData = {
	'title': 'product_title',
	'cover': 'img_cover',
	'params': {
		'a': 'aaa',
		'b': 'bbb',
		'c': 'ccc',
		'd': 'ddd'
	},
}
class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			historyPath: '',
			productData: {}
		}
	}
	componentWillMount() {
		const {
			location
		} = this.props;
		this.setState({
			id: location.hash.match(/\#(\S*)\&/)[1],
			historyPath: location.hash.match(/\=(\S*)/)[1],
			productData: productData
		})

	}
	render() {
		return (
			<div className='ysg-product'>
			<Link to={'/ysg/'+this.state.historyPath}><h3>back--{this.state.historyPath}</h3></Link>
			<div>{this.state.id}</div>
			</div>
		)
	}
}
export default Product;