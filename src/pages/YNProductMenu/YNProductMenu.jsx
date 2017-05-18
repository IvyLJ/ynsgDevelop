let React=require('react');
let $=require('jquery');
let Link= require('react-router').Link;
let YNNav=require('modules/YNNav');

const MenuItems=React.createClass({	

	render:function(){
		return(
			<div className="menu-lamp-item col-md-4">
      <div className="lamp-info"> 
      <Link to={`/product-details/${this.props.data.id}`} className="btn product"><img src={this.props.data.src} /></Link>
      </div>
			</div>
		);
	}
});

const YNMenu = React.createClass({

	render:function(){
    let menuData=this.props.data;
    let cellingData=[],
    floorData=[],
    wallData=[],
    tableData=[],
    xData=[],
    otherData=[];
    for(let i=0;i<menuData.length;i++){
      let item=menuData[i];
      if(item.classify=="celling"){
        cellingData.push(item);
      }else if(item.classify=="floor"){
                floorData.push(item);
      }else if(item.classify=="wall"){
                wallData.push(item);
      }else if(item.classify=="table"){
               tableData.push(item);
      }else if(item.classify=="x"){
                xData.push(item);
      }else{
                otherData.push(item);
      }
    }
		return(
			<div className="menu-container">
			<div className="menu-title" id="celling"><img src="" /><label>吊灯</label></div>
           <div className="menu-lamps row">
            {cellingData.map(function(result,index){
               	return(
               		<MenuItems key={index} data={result}/>
               	);
            })}
            </div>
            <div className="menu-title" id="floor"><img src="" /><label>落地灯</label></div>
             <div className="menu-lamps row">
            {floorData.map(function(result,index){
               	return(
               		<MenuItems key={index} data={result}/>
               	);
            })}
            </div>
            <div className="menu-title" id="wall"><img src="" /><label>壁灯</label></div>
             <div className="menu-lamps row">
            {wallData.map(function(result,index){
               	return(
               		<MenuItems key={index} data={result}/>
               	);
            })}
            </div>
            <div className="menu-title" id="table"><img src="" /><label>台灯</label></div>
             <div className="menu-lamps row">
            {tableData.map(function(result,index){
               	return(
               		<MenuItems key={index} data={result}/>
               	);
            })}
            </div>
            <div className="menu-title" id="top"><img src="" /><label>吸顶灯</label></div>
             <div className="menu-lamps row">
            {xData.map(function(result,index){
               	return(
               		<MenuItems key={index} data={result}/>
               	);
            })}
            </div>
            <div className="menu-title" id="other"><img src="" /><label>其他</label></div>
             <div className="menu-lamps row">
            {otherData.map(function(result,index){
               	return(
               		<Other key={index} data={result}/>
               	);
            })}
            </div>
			</div>
		);
	}
});

const YNProductMenu = React.createClass({
	getInitialState: function() {
    return {
      data: []
    };
  }, 
    componentDidMount: function() {
      $.ajax({
         url:"/ynsg/dev/data/menu.json",
         type:'get',
         success:(res) =>{
           if(res){
               this.setState({
                 data: res || []
               });
               return;
           }
          },
          error:()=> {
            console.log("error");
           }
        });   
    },
  render:function(){
	return(
		<div className="yn-product-menu">
		 <YNNav/>
		 <YNMenu data={this.state.data}/>
		 </div>

	);
  }
});

module.exports=YNProductMenu;