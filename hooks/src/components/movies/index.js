import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Filter from "../filter";
import useMovies from "./movies.store";
import styles from "./styles.module.scss";
import movieFilter from "../../helpers/movieFilter";

export default () => {
  const {
    movies: { isLoaded = false, data },
    fetchMovies
  } = useMovies();
  const [searchText, updateSearch] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const filterProps = { searchText, updateSearch };
  if (!isLoaded) return <Loading />;
  if (!data.length) return <div>No Movies</div>;
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
};
