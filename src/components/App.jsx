import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'

function App() {
  return (
    <div>
      <SearchBar onSubmit={fetchImage}/>
    </div>
  );
}

export default App;
