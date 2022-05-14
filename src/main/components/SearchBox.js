import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<form onsubmit={(e) => {e.preventDefault();}}>
				<input
				className='form-control'
				value={props.value}
				placeholder='Type a keyword to search...'
			></input>
			<button onSubmit={(event) => props.setSearchValue(event.target.value)}>Search</button>
			</form>
			
		</div>
	);
};

export default SearchBox;
