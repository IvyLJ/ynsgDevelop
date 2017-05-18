let React= require('react');

const YNNav =React.createClass({
	render:function(){
	  return(
		<nav className="yn-nav">
                <div className="logo"><img src="./images/logo-black.png"/></div>
                  <label className="current-loca">国际馆</label>
                  <ul  className="menu">
                     <li className="menu-item celling"><a href="#celling">吊灯</a></li>
                     <li className="menu-item floor"><a href="#floor">落地灯</a></li>
                     <li className="menu-item wall"><a href="#wall">壁灯</a></li>
                     <li className="menu-item table"><a href="#table">台灯</a></li>
                     <li className="menu-item top"><a href="#top">吸顶灯</a></li>
                     <li className="menu-item other" ><a href="#other">其他</a></li>
                  </ul>
                 
             </nav>
	  );
	}
});
module.exports=YNNav;