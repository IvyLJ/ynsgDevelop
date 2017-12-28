import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	Card,
	CardImg,
	CardText,
	Gallery,
	GalleryItem
} from 'ysgreact';
import MenuList from '../menulist';
import classNames from 'classnames';
import './index.less';

const menuData = [{
	'title': '11111',
	'dataList': [{
		'linkPath': '/ysg/product#a',
		'srcPath': '',
		'text': 'menu-a-new'
	}, {
		'linkPath': '/ysg/product#b',
		'srcPath': '',
		'text': 'menu-b-new'
	}, {
		'linkPath': '/ysg/product#c',
		'srcPath': '',
		'text': 'menu-c-new'
	}, {
		'linkPath': '/ysg/product#a',
		'srcPath': '',
		'text': 'menu-a-new'
	}, {
		'linkPath': '/ysg/product#b',
		'srcPath': '',
		'text': 'menu-b-new'
	}, {
		'linkPath': '/ysg/product#c',
		'srcPath': '',
		'text': 'menu-c-new'
	}]
}, {
	'title': '22222',
	'dataList': [{
		'linkPath': '/ysg/product#a',
		'srcPath': '',
		'text': 'menu-a-new'
	}, {
		'linkPath': '/ysg/product#b',
		'srcPath': '',
		'text': 'menu-b-new'
	}, {
		'linkPath': '/ysg/product#c',
		'srcPath': '',
		'text': 'menu-c-new'
	}]
}, {
	'title': '33333',
	'dataList': [{
		'linkPath': '/ysg/product#a',
		'srcPath': '',
		'text': 'menu-a-new'
	}, {
		'linkPath': '/ysg/product#b',
		'srcPath': '',
		'text': 'menu-b-new'
	}, {
		'linkPath': '/ysg/product#c',
		'srcPath': '',
		'text': 'menu-c-new'
	}]
}, {
	'title': '44444',
	'dataList': [{
		'linkPath': '/ysg/product#a',
		'srcPath': '',
		'text': 'menu-a-new'
	}, {
		'linkPath': '/ysg/product#b',
		'srcPath': '',
		'text': 'menu-b-new'
	}, {
		'linkPath': '/ysg/product#c',
		'srcPath': '',
		'text': 'menu-c-new'
	}]
}];

class MenuGallery extends Component {
	render() {
		const {
			className,
			data
		} = this.props;
		const classes = classNames(
			'menu-page-gallery',
			className,
		);
		return (
			<div className={classes}>
				{data.map((res,index)=>{
					return(
						<GalleryItem key={index}>
							<Card href={res.linkPath} >
								<CardImg ><img src={res.srcPath}/></CardImg>
								<CardText>{res.text}</CardText>
							</Card>
						</GalleryItem>
					);
				})}
			</div>
		);
	}
}

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: false,
			listTitle: '',
			listData: []
		}
		this.back = this.back.bind(this);
	}
	componentWillMount() {
		this.setState({
			menuData: menuData
		})
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
	checkAll(data) {
		this.setState({
			showList: true,
			listTitle: data.title,
			listData: data.dataList
		})
	}
	back() {
		this.setState({
			showList: false
		})
	}

	render() {
		const {
			pc
		} = this.props.device;
		return (
			<div className='ysg-menu-page'>
			{!this.state.showList?<div className='ysg-menu-inshort'>

				{this.state.menuData.map((data,index)=>{
					return(
						<div className='ysg-menu-wrapper' key={index}>
							<div className='menu-page-title'>
								<h3 className='title-label'>{data.title}</h3>
								{pc?null:<a className='title-op' onClick={this.checkAll.bind(this,data)}>查看更多 ></a>}
							</div>
							{pc?
								<MenuGallery data={data.dataList} className='pc-menu'/>:
								<Gallery className='menu-page-gallery' key={index}>
									<MenuGallery data={data.dataList} className='client-menu'/>
								</Gallery>	
							}
							
						</div>
					);
				})}
				</div>:<div className='ysg-menu-list'>
			<h3 onClick={this.back}><span> back</span>{this.state.listTitle}</h3>
			<MenuList data={this.state.listData}/>
			</div>}
			</div>
		)
	}
}
export default Menu;