let jquery = require('jquery');
let React = require('react');
let ReactDOM = require('react-dom');
let Router = require('react-router').Router;
let Route = require('react-router').Route;
let IndexRoute = require('react-router').IndexRoute;
let YNIndex = require("pages/YNIndex");
let YNProductMenu = require("pages/YNProductMenu");
let YNProductDetails = require("pages/YNProductDetails");
let YNArticle = require("pages/YNArticle");


const App = React.createClass({
	render: function() {
		return (
			<section className="yn-index"> {this.props.children} </section>
		);
	}
});
ReactDOM.render(
	<Router >
      <Route path = "/" component = { App } >
        <IndexRoute component = {YNIndex}/>
        <Route path="product-menu" component={YNProductMenu} />
        <Route path="product-details/:id" component={YNProductDetails} />
        <Route path="product-article" component={YNArticle} />
      </Route> 
    </Router>,
	document.getElementById('ynContainer')
);