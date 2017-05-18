let React=require('react');
let $=require('jquery');
let Link= require('react-router').Link;
let YNNav=require('modules/YNNav');

const YNArticle = React.createClass({
	
    
  render:function(){
	return(
		<div className="yn-article">
		 <YNNav/>
		 <div>sdasdads</div>
		 </div>
	);
  }
});
module.exports=YNArticle;