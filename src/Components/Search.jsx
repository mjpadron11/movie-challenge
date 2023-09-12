import React, { useState } from 'react';
import styled from 'styled-components'

const StyledWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	width: 100%;
	padding: 10rem 0 0 0;
`

const  Search = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    console.log('Búsqueda:', search);
    console.log('Género:', genre);
  };

  return (
    <StyledWrapper>
      <div>
        <input
          type="text"
          name="search"
					placeholder='Search by name, year or director'
          value={Search}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </StyledWrapper>
  );
}

export default Search;
