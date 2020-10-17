import React, { useState } from "react";
import "./Header.css";

const Header = ({ setIP }) => {
	const [ipTyping, setIpTyping] = useState("");

	const handleIP = (e) => {
		e.preventDefault();
		ipTyping && setIP(ipTyping);
		setIpTyping("");
	};

	return (
		<form id='header' className='header'>
			<h2>IP Address Tracker</h2>
			<div className='header__search'>
				<input
					aria-label='search'
					name='ip_search'
					placeholder='Enter IP'
					type='text'
					onChange={(e) => setIpTyping(e.target.value)}
					value={ipTyping}
				/>
				<button type='submit' onClick={handleIP}>
					<img src={require("./icon-arrow.svg")} alt='search' />
				</button>
			</div>
		</form>
	);
};

export default Header;
