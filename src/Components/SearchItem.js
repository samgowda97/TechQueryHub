import { debounce } from "lodash";
import SearchBar from "material-ui-search-bar"

const SearchItem = ({searchTerm,setSearchTerm}) => {
  const debouncedSetSearchTerm = debounce(setSearchTerm, 300); 

  const handleSearchTermChange = (value) => {
    debouncedSetSearchTerm(value);
  };
  
  const handleCancelSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
         <SearchBar
          value={searchTerm}
          onChange={handleSearchTermChange}
          onCancelSearch={handleCancelSearch}
          style={{ width: '300px',marginTop:"10px" }} 
          placeholder="Search Question"
        />
    </div>
  )
}

export default SearchItem