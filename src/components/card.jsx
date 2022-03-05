import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhoneNumber, bizImage },
}) => {
  return (
    <>
      <div className="col-3 mt-3">
        <div className="card" style={{ width: "12rem" }}>
          <img
            style={{ height: "8rem" }}
            src={bizImage}
            className="card-img-top"
            alt={bizName}
          />
          <div className="card-body">
            <h5 className="card-title">{bizName}</h5>
            <p className="card-text">{bizDescription}</p>
            <p className="card-text border-top">
              <i className="bi bi-geo-alt"></i> {bizAddress}
            </p>
            <p className="card-text border-top">
              <i className="bi bi-telephone-plus"></i> {bizPhoneNumber}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Link to={`/create-card/edit/${_id}`}>
          <button className="btn mx-3">Edit</button>
        </Link>
        <Link to={`/my-cards/delete/${_id}`}>
          <button className="btn mx-2">Delete</button>
        </Link>
      </div>
    </>
  );
};

export default Card;
