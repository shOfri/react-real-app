import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhoneNumber, bizImage },
}) => {
  return (
    <div className="col-sm-4 pb-3">
      <div className="col-2 pt-3">
        <div
          className="card shadow-lg rounded"
          style={{
            width: "12rem",
          }}
        >
          <img
            style={{ height: "8rem" }}
            src={bizImage}
            className="card-img-top"
            alt={bizName}
          />
          <div className="card-body bg-dark bg-opacity-75 text-white">
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

        <div className="p-2 d-flex">
          <Link to={`/my-cards/edit/${_id}`}>
            <button className="btn btn-sm btn-outline-secondary ms-2">
              Update
            </button>
          </Link>
          <Link to={`/my-cards/delete/${_id}`}>
            <button className="btn btn-sm btn-outline-secondary ms-4">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
