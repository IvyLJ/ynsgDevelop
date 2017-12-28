import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	Card,
	CardImg,
	CardText,
	Ajax
} from 'ysgreact';

import './index.less';
class MenuList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuData: [],
		}
	}
	testServer() {
		Ajax.get(
			'/test'
		).then(
			(res) => {
				console.log(res);
			}
		);
	}
	componentDidMount() {
		const {
			data
		} = this.props;
		this.setState({
			menuData: data
		});

	}
	render() {

		return (
			<div className='ysg-menu-page'>
			
			{this.state.menuData.map((res,index)=>{
				return(
					<Card href={res.linkPath} key={index}>
						<CardImg><img src={res.srcPath}/></CardImg>
						<CardText>{res.text}</CardText>
					</Card>
				);
			})}
			
            {/*<button onClick={this.testServer}>test server</button>*/}
			</div>
		)
	}
}
export default MenuList;