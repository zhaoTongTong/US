import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Memory from './containers/Memory';
import Home from './containers/Home';
import Add from './containers/Add';
import Message from './containers/Message';
import Setting from './containers/Setting';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<div style={{height: '100%'}}>
			<Route exact path="/" component={Home}/>
			<Route path="/memory" component={Memory}/>
			<Route path="/add" component={Add}/>
			<Route path="/message" component={Message}/>
			<Route path="/setting" component={Setting}/>
		</div>
	</BrowserRouter>
	),
	document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
