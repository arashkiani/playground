//import defaultState from "./defaultState.json";
export const fetchMoviesAction = dispatch => {
  const data = [{ id: 1, name: "foo" }, { id: 2, name: "boo" }];
  dispatch({ type: "fetch", data });
};
function moviesReducer(state = { movies: [] }, { type, data = [] }) {
  if (type === "fetch") {
    return {
      ...state,
      movies: data
    };
  } else {
    return state;
  }
}
export default moviesReducer;
