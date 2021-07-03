import React from "react";
import Home from "./views/home";
import Create from "./views/create";
import Edit from "./views/edit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/edition/:id">
							<Edit />
						</Route>
						<Route exact path="/create">
							<Create />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route render={() => <h1>Not found</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
