import { json } from "body-parser";
import React, { useEffect, useState } from "react";
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
		<div className="App">
			<h1>{message}</h1>
		</div>
	);
}

export default App;
