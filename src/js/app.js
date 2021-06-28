import React from "react";
import Home from "./views/home";
import Create from "./views/create";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" render={<Home />} />

						<Route exact path="/create" render={<Create />} />

						<Route
							render={() => (
								<h1 className="notfound">Not found!</h1>
							)}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
