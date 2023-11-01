import React, { Component } from 'react';

const CountryCard = (props) => {
	const { name, capital, subregion, unMember, population, continent, map, flag, timeZone } = props;
	return(
		<div className="country_card">
			<div className="flag_block">
				<img src={flag} alt="country flag" className="image_cover"/>
			</div>
			<div className="Details_block">
				<div className="name">{name}</div>
				<div className="more_details_block">
					<div className="more_details">
						<div className="label">capital : </div>
						<div className="response">{capital}</div>
					</div>
					<div className="more_details">
						<div className="label">continents : </div>
						<div className="response">{continent}</div>
					</div>
					<div className="more_details">
						<div className="label">currencies : </div>
						<div className="response">currency</div>
					</div>
					<div className="more_details">
						<div className="label">languages : </div>
						<div className="response">Washington</div>
					</div>
					<div className="more_details">
						<div className="label">map : </div>
						<div className="response"><a href={map}>click here</a></div>
					</div>
					<div className="more_details">
						<div className="label">subregion : </div>
						<div className="response">{subregion}</div>
					</div>
					<div className="more_details">
						<div className="label">unMember : </div>
						{ (!unMember) ?
							<div className="response redbox"></div> :
							<div className="response greenbox"></div>
						}
					</div>
					<div className="more_details">
						<div className="label">population : </div>
						<div className="response">{population}</div>
					</div>
					<div className="more_details">
						<div className="label">timeZone : </div>
						<div className="response">{timeZone}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CountryCard;