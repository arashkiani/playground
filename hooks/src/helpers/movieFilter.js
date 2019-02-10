export default (searchText, MovieText) =>
  MovieText.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
