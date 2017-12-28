import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Index from './index';
import Frame from './frame';

class App extends Component {
	render() {
		return (
			<div className="ysg">
				<Router>
					<Switch>
						<Route exact path='/' component={Index} />
                		<Route exact path='/index' component={Index} />
                		<Route path='/ysg' component={Frame} />
                		<Route render = { ()=>{
                    		return <h1>Not Found</h1>;
                		}} />
                	</Switch>
				</Router>
			</div>
		)
	}
}
export default App;