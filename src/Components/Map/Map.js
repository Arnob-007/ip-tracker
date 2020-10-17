import React from "react";
import { Map as LMap, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";

const Map = ({ ipInfo }) => {
	const {
		latitude,
		longitude,
		country_flag,
		org,
		region,
		country,
		continent,
	} = ipInfo;

	const position = [latitude, longitude];

	const markerIcon = new Icon({
		iconUrl: require("./icon-location.svg"),
		iconSize: [50, 60],
	});

	return (
		<div id='map' className='map'>
			<LMap className='map' center={position} zoom={18}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={position} icon={markerIcon}>
					<Popup>
						<img className='popup__flag' src={country_flag} alt='flag' />
						<h4>{org}</h4>
						<h5>{region}</h5>
						<h5>{country}</h5>
						<h5>Continent: {continent}</h5>
					</Popup>
				</Marker>
			</LMap>
		</div>
	);
};

export default Map;
