import React from "react";
// Import Link component for all internal application hyperlinks
import { Link } from "react-router-dom";

const MovieList = ({ movies, title }) => {
  if (!movies.length) {
    return <h3>...No Movies...</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {movies &&
          movies.map((movie) => (
            <div key={movie._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {movie.title} <br />
                  <span className="text-white" style={{ fontSize: "1rem" }}>
                    movie reviews
                    {movie.reviews && movie.reviews.length === 1 ? "" : "s"}
                  </span>
                </h4>

                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/movies/${movie._id}`}
                >
                  Add a review
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;