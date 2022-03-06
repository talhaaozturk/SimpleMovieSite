import React from "react";

const MovieList = (propss) => {
  return (
    <div className="row">
      {propss.moviess.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-lg" style={{ height: "98%" }}>
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="image"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex align-items-center justify-content-between ">
                <button
                  type="button"
                  onClick={(event) => propss.deleteMovieProp(movie)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
                <h3>
                  <span className="badge bg-info">{movie.rating}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
