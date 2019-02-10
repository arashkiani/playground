import { useStore } from "../../hooks/store";
import { getList } from "../../services/rest";

export default () => {
  const [{ movies }, setStore] = useStore();
  const fetchMovies = async () => {
    const { results } = await getList();
    setStore(prevState => ({
      ...prevState,
      movies: { isLoaded: true, data: results }
    }));
  };
  return {
    movies,
    fetchMovies
  };
};
