import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Filter from "../filter";
import useMovies from "./movies.store";
import styles from "./styles.module.scss";
import movieFilter from "../../helpers/movieFilter";
function Movies() {
  const {
    movies: { isLoaded = false, data },
    fetchMovies
  } = useMovies();
  const [searchText, updateSearch] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }
  const filterProps = { searchText, updateSearch };

  return (
    <>
      <Filter {...filterProps} />
      <div className={styles.movies}>
        {data.map(
          ({ id, title, poster_path, backdrop_path, overview }) =>
            movieFilter(searchText, title + " " + overview) && (
              <div className={styles.movies__item} key={id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
                      poster_path || backdrop_path
                  }
                  alt={title + " Poster Image"}
                />
                <h2 className={styles.movies__title}>{title}</h2>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default Movies;
