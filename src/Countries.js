import React, {Component} from 'react';
import CountryCard from './CountryCard';

const Countries = ({country}) => {
		return ( 
			<>
			 { country.map((each, i) => {
			 	// console.log(country);
			 	// console.log(i, each);
			 	return (<CountryCard key={i} name={country[i].name.common} capital={country[i].capital} continent={country[i].continents} subregion={country[i].subregion} map={country[i].maps.googleMaps} unMember={country[i].unMember} population={country[i].population} flag={country[i].flags.png} timeZone={country[i].timezones}/>)
			 })
			}
			</>
		)
}

export default Countries;