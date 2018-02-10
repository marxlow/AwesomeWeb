
const isSearched = (searchTerm) => {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

export default isSearched;