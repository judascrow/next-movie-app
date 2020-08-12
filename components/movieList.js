import React, { Fragment } from "react";

const shorten = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.substr(0, maxLength) + "...";
  }
  return text;
};

const MovieList = (props) => {
  const { movies } = props;

  return (
    <Fragment>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img className="card-img-top" src={movie.image} alt="" />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{movie.name}</a>
                </h4>

                <p className="card-text">{shorten(movie.description, 100)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{movie.rating}</small>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default MovieList;
