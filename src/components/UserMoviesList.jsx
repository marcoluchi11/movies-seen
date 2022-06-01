import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const UserMoviesList = () => {
  const { list } = useContext(MoviesContext);
  return list.map((item) => (
    <div>
      <h1>{item.Name}</h1>
      <img src={item.Poster} alt="" />
    </div>
  ));
};

export default UserMoviesList;
