import { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  location: string;
  handleSearch: (searchValue: string) => void;
};

export const SearchBar = ({
  location,
  handleSearch,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState(location);

  // const handleSearch = () => {
  //   if (searchValue === "") {
  //     return;
  //   }

  //   setLocation(searchValue);
  // };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search Location..."
      />

      <button onClick={() => handleSearch(searchValue)}>
        🔍 Search
      </button>
    </div>
  );
};