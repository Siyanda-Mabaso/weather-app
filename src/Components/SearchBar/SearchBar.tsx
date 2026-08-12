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
placeholder="Search for a city..."
className={styles.searchInput}
value={searchValue}
onChange={(event) => setSearchValue(event.target.value)}
/>

<button
className={styles.searchButton}
onClick={handleSearch}
>
Search
</button>
</div>
);
};