import React from 'react';
import Create from './Create';
import List from "./List" ;
import Blog from "./Blog" ;
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
	

	return (
	<div className="App">

		<Router>
			<div className="panel-content">
				<Switch>
					<Route exact path="/" render={(props) => <List {...props} />} />

					<Route path="/create" render={(props) => <Create {...props} />} />

					<Route path="/list" render={(props) => <List {...props} />} />

					<Route path="/blog" render={(props) => <Blog {...props} />} />

				</Switch> 
			</div>
		</Router>

	</div>
	);
}

export default App;
