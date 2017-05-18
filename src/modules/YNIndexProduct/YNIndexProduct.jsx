let React= require('react');
let Link= require('react-router').Link;
const ProductItem = React.createClass({
	render:function(){
		return(
			<div className="product-item">
			<Link to={{pathname:'/product-details', query:{id:this.props.data.id} }} className="product-item-box">
			<p className="product-item-text">{this.props.data.description}</p>
			</Link>
			</div>
		);
	}
});
const YNIndexProduct = React.createClass({
	render:function(){
		return(
			<div className="col-md-5 product-box">
               {this.props.data.map(function(result,index){
               	return(
               		<ProductItem key={index} data={result}/>
               	);
               })}
            </div>
		);
	}
});
module.exports = YNIndexProduct;