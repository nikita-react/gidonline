import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { getOneMovie } from "../../store/movies/action";
import { useParams } from "react-router-dom";

export const OneMovie: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { oneMovies } = useTypedSelector((state) => state.oneMovie);
  const { id }: { id: string } = useParams();
  useEffect(() => {
    const getOneMovieObj = () => dispatch(getOneMovie(id));
    getOneMovieObj();
  }, [dispatch, id]);

  return (
    <div>
      {[oneMovies].map((data: any) => {
        return (
          <ul key={String(data.id)}>
            <li>{data.name}</li>
            <li>{data.year}</li>
            <li>{data.time}</li>
            <li>{data.description}</li>
            {/* <li>{data.genre.join(", ")}</li> */}
          </ul>
        );
      })}
    </div>
  );
};
