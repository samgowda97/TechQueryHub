import SearchBar from "material-ui-search-bar"

const SearchItem = ({searchTerm,setSearchTerm}) => {
  return (
    <div>
         <SearchBar
          value={searchTerm}
          onChange={(value) => setSearchTerm(value)}
          onCancelSearch={() => setSearchTerm('')}
          style={{ width: '300px',marginTop:"10px" }} 
        />
    </div>
  )
}

export default SearchItem