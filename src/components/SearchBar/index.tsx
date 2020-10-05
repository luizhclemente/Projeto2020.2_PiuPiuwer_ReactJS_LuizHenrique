import React from 'react';

import { SearchBarSpace } from './styles'

const SearchBar: React.FC = () => {
  return (
    <SearchBarSpace>
      <input
        className="search"
        type="text"
        placeholder="Pesquise no Piupiuwer"
      />
    </SearchBarSpace>

  )
}

export default SearchBar