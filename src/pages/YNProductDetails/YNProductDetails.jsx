let React = require('react');
let $ = require('jquery');
let Link = require('react-router').Link;
let ReactDOM = require('react-dom');
let YNNav = require('modules/YNNav');

const YNProBannerItem = React.createClass({
	render: function() {
		return (
			<li className="banner-item">
		        <img src={this.props.data}/>
		    </li>
		);
	}
});
//banner图
const YNProductBanner = React.createClass({
	componentDidMount: function() {
		let i = 0;
		let imgWidth = $(window).width() - 350;
		let imageWidth = imgWidth + 'px';
		$('.banner-item img').css("width", imageWidth);
		time = setInterval(function() {
			++i;
			if (i < 3) {
				let leftLength = -imgWidth * i + 'px';
				console.log(leftLength);
				$('.pro-banner').css("left", leftLength);
			} else {
				i = 0;
				$('.pro-banner').css("left", "0");
			}
		}, 5000);
	},
	render: function() {

		return (
			<ul className="pro-banner" >			
			 {this.props.data.map(function(result,index){
			 	return(
			 	<YNProBannerItem key={index} data={result}/>
			 	 );
			 })}
			</ul>
		);
	}
});
//材质信息
const YNProductMaterial = React.createClass({
	render: function() {
		return (
			<div className="pro-material">
			    <div className="pro-material-image col-md-6">{this.props.data.materialImage}</div>
			    <div className="pro-material-text col-md-6">{this.props.data.materialText}</div>
			</div>
		);
	}
});
//尺寸信息
const YNProSizeItem = React.createClass({
	render: function() {
		return (
			<li className="size-item">
		        <img src={this.props.data.sizeImage}/>
		        <p>{this.props.data.sizeText}</p>
		    </li>
		);
	}
});
const YNProductSize = React.createClass({
	render: function() {
		return (
			<ul className="pro-size" >			
			 {this.props.data.map(function(result,index){
			 	return(
			 	<YNProSizeItem key={index} data={result}/>
			 	 );
			 })}
			</ul>
		);
	}
});
//场景信息
const YNProSceneItem = React.createClass({
	render: function() {
		return (
			<li className="scene-item">
		        <img src={this.props.data}/>
		    </li>
		);
	}
});
//细节信息
const YNProductScene = React.createClass({
	render: function() {
		return (
			<ul className="pro-scene" >			
			 {this.props.data.map(function(result,index){
			 	return(
			 	<YNProSizeItem key={index} data={result}/>
			 	 );
			 })}
			</ul>
		);
	}
});
//完整的产品详情页
const YNProductDetails = React.createClass({
	getInitialState: function() {
		return {
			data: [],
			banner: [],
			size: [],
			scene: []
		};
	},
	//获取数据并处理当前对象的所有数据
	componentDidMount: function() {
		let id = this.props.params.id,
			currentLamp = '';
			console.log(id);
		$.ajax({
			url: "/ynsg/dev/data/yn-product.json",
			type: 'get',
			success: (res) => {
				if (res) {
					for (let i = 0; i < res.length; i++) {
						let item = res[i];
						if (id == item.id) {
							currentLamp = item;
						}
					}
					this.setState({
						data: currentLamp || '',
						banner: currentLamp.banner,
						size: currentLamp.size,
						scene: currentLamp.scene
					});
					return;
				}
			},
			error: () => {
				console.log("error");
			}
		});
	},
	render: function() {
		return (
			<div className="yn-product-details">
			    <div className="details-box">
			        <YNProductBanner data={this.state.banner}/>	 
			        <h1 className="pro-name">{this.state.data.name}</h1>
			        <YNProductMaterial data={this.state.data}/>
			        <YNProductSize data={this.state.size}/>
			        <div className="pro-part">
			            <h3 className="title"></h3>
			            <img src={this.state.data.part}/>
			        </div>
			        <YNProductScene data={this.state.scene}/>
			    </div>
		    </div>
		);
	}
});
module.exports = YNProductDetails;