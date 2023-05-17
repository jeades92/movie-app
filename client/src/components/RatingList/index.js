import React from "react";

const RatingList = ({ ratings }) => {
  if (!ratings.length) {
    return <h3> No Reviews</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {ratings &&
          ratings.map((rating) => (
            <div key={rating} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {rating} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RatingList;
