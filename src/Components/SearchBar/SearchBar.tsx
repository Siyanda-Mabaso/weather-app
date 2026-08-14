import { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  location: string;
  setLocation: (location: string) => void;
};

export const SearchBar = ({
  location,
  setLocation,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState(location);

  const handleSearch = () => {
    if (searchValue === "") {
      return;
    }

    setLocation(searchValue);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search Location..."
      />

      <button onClick={handleSearch}>
        🔍 Search
      </button>
    </div>
  );
};