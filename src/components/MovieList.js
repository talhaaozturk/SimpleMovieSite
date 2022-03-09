import React from "react";
import { Link } from "react-router-dom";

const MovieList = (propss) => {
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length < maxLength) return string;
    if (string.length > maxLength) return `${string.substring(0, maxLength)}..`;
  };
  return (
    <div className="row">
      {propss.moviess.map(
        (
          movie,
          i //i parametresi eklenen filmin sayısını gösteriyor
        ) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-lg">
              <img
                className="card-img-top"
                alt="image"
                src={movie.imageURL}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">
                  {truncateOverview(movie.overview, 120)}
                </p>
                <div className="d-flex align-items-center justify-content-between ">
                  <button
                    type="button"
                    onClick={(event) => propss.deleteMovieProp(movie)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                  <Link
                    to={`edit/${movie.id}`}
                    type="button"
                    className="btn btn-md btn-outline-primary"
                  >
                    Edit
                  </Link>
                  <h3>
                    <span className="badge bg-info">{movie.rating}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MovieList;
