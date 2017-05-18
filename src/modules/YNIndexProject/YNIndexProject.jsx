let React= require('react');
let Link= require('react-router').Link;

const ProjectItem = React.createClass({

  render:function(){
    return(
      <div className="project-item">
            <Link to={{pathname:'/product-details', query:{id:this.props.data.id} }} className="project-case">
                <img className="project-case-img" src={this.props.data.src}/>
                <div className="_cover"></div>
                <div className="_light"></div>
                <h3 className="fadeInUp project-item-desc">{this.props.data.name}</h3>
            </Link>
      </div> 
    );
  }
});
const YNIndexProject = React.createClass({
	render:function(){
		return(
			<div className="col-md-7 project-box">
      {this.props.data.map(function(result,index){
            return (
             <ProjectItem key={index} data={result}/>
            );
         })}
           
            <div className="project-item last">
                <Link to='/product-menu' className="project-more" href="">查看更多</Link>
            </div>
      </div>
		);
	}
});
module.exports = YNIndexProject;