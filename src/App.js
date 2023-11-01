import React, { Component, useEffect, useState } from 'react';
import './App.css';
import SearchField from './SearchField';
import Countries from './Countries';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		const fectData = async () => {
			try {
				const response = await fetch('https://restcountries.com/v3.1/all');
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					setCountries(data);
				} else {
					throw new Error("Failed to fetch data");
				}
			} catch (err) {
				console.error("Error fetching data: ", err);
			}
		}
		fectData();
	}, []);

	const onSearchHandle = (e) => {
		setSearchField(e.target.value);
	}

	const filterHandler = countries.filter(country => {
		return country.name.common.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div>
			<div className="logoText">Country List</div>
			<div className="searchBlock">
				<div className="overlay">
					<div className="searchLabel">Find Countries by Name</div>
					<div><SearchField searchResult={onSearchHandle} /></div>
				</div>
			</div>
			<div className="country_card_block">
				{
					(!countries.length) ?
					<div>loading...</div> : 
					(<>
						{
							console.log(countries[0].currencies, countries[171].languages)
						}
						<Countries country={filterHandler}/>
					</>)
				}
			</div>
		</div>
	);
}


export default App;

