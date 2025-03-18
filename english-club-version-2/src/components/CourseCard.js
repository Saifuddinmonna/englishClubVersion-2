import React from 'react';

function CourseCard({ image, title, description, price }) {
  return (
    <div>
      <div className="d-md-flex justify-content-center align-items-center text-wrap border rounded">
        <div className="item-img p-3 pe-4 d-block mx-auto justify-content-center">
          <img src={image} alt={title} className="d-block mx-auto w-sm-100 rounded-4 img-fluid" />
        </div>
        <div className="item-text courses-text text-start p-3">
          <h2 className="pb-3">{title}</h2>
          <p>{description}</p>
          <p className="card-text">
            <small className="fs-5 fw-bold text-primary">Price : {price}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard; 