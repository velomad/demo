import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Test from "./Pages/Test";
import Test2 from "./Pages/Test2";
import "./App.css";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("/test")
			.then((data) => data.json())
			.then((resp) => {
				console.log(resp);
				setMessage(resp.message);
			});
	}, []);

	return (
		<Router>
			<div>{message}</div>
			<div>
				<Link to="/">
					<button>BACK</button>
				</Link>
				<Link to="/test2">
					<button>page 2 </button>
				</Link>
			</div>
			<Switch>
				<Route exact path="/" component={Test} />
				<Route exact path="/test2" component={Test2} />
			</Switch>
		</Router>
	);
}

export default App;
