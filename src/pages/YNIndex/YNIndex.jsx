let React = require('react');
let $=require('jquery');
let Link = require('react-router').Link;
let YNIndexProject = require('modules/YNIndexProject');
let YNIndexProduct = require('modules/YNIndexProduct');

const YNIndexNav =React.createClass({
  render:function(){
    return(
       <nav className="yn-index-nav">
             <div className="line line1"></div>
             <div className="logo"><img src="./images/logo.png"/></div>
             <div className="line line2"></div>
             <div className="menu"></div>
             <div className="line line3"></div>
             <div className="contact-weixin"></div>
             <div className="contact-qq"></div>
             <div className="line line5"></div>
       </nav>
    );
  }
});
const YNLeftBanner = React.createClass({
	render:function(){
		return(
			 <div className="col-md-6 index-left">
       <div className="cover">
                <div className="logo-pic"><img src="./images/logo.png"/></div>
                <p className="logo-text">专业灯饰设计平台，只为优质生活</p>
                <div className="btn-group">
                <Link to="/product-menu" className="btn venue-op-outer" >国内馆</Link>
                <Link to="/product-menu" className="btn venue-op-outer" >国际馆</Link>
                </div>
                </div>
            </div>
		);
	}
});
const YNRight = React.createClass({
	render:function(){
		return(
			<div className="col-md-6 index-right">
			    <div className="row">
			         <YNIndexProject data={this.props.data.slice(0,3)}/>
			         <YNIndexProduct data={this.props.data.slice(3)}/>
			    </div>
			</div>
		);
	}
});

const YNIndex = React.createClass({
	getInitialState: function() {
    return {
      data: []
    };
  }, 
    componentDidMount: function() {
      $.ajax({
         url:"/ynsg/dev/data/yn-index.json",
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
		  <div className="yn-index">
			<YNIndexNav/>
            <div className="yn-main">
              <div className="row">
                  <YNLeftBanner />
                  <YNRight data={this.state.data}/>
              </div>
            </div>
		  </div>
		);
	}
});
module.exports = YNIndex;