import React from 'react'

const SearchField = ({searchResult}) => {
	return (
		<div className="searchMainBlock">
			<input type="search" className="searchBox" onChange={searchResult}/>
		</div>
	)
}

export default SearchField;