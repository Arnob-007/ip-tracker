import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Map from "./Components/Map/Map";

import "./App.css";
import "leaflet/dist/leaflet.css";

const App = () => {
	const [IP, setIP] = useState("");
	const [ipInfo, setIpInfo] = useState(null);
	const [isError, setIsError] = useState(false);

	const handleError = () => {
		!isError && setIsError(true);
		setTimeout(() => setIsError(false), 2000);
	};

	useEffect(() => {
		fetch(`https://ipwhois.app/json/${IP}`)
			.then((res) => res.json())
			.then((data) => (data.success ? setIpInfo(data) : handleError()))
			.catch((err) => handleError());
	}, [IP]);

	return (
		<div className='App'>
			<Header setIP={setIP} />
			{ipInfo && (
				<>
					<Info ipInfo={ipInfo} />
					<Map ipInfo={ipInfo} />
				</>
			)}
			{isError && (
				<div className='error__modal'>
					<h5>COULDN'T GET IP DETAILS</h5>
				</div>
			)}
		</div>
	);
};

export default App;
