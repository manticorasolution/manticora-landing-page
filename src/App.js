import React from 'react';
import Landing from './pages/Landing';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<Landing />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
