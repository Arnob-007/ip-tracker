import React from "react";
import "./Info.css";

const Info = ({ ipInfo }) => {
	const { ip, region, city, timezone_gmt, isp } = ipInfo;

	return (
		<div className='info__container'>
			<div className='info'>
				<InfoSection title='IP ADDRESS' value={ip ? ip : "N/A"} />
				<InfoSection
					title='LOCATION'
					value={region ? region + ", " + city : "N/A"}
				/>
				<InfoSection
					title='TIMEZONE'
					value={timezone_gmt ? timezone_gmt : "N/A"}
				/>
				<InfoSection title='ISP' value={isp ? isp : "N/A"} />
			</div>
		</div>
	);
};

const InfoSection = ({ title, value }) => {
	return (
		<div className='info__section'>
			<h5 className='section__title'>{title}</h5>
			<h3>{value}</h3>
		</div>
	);
};

export default Info;
