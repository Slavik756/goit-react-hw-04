import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
