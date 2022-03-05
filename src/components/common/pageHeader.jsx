import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="row">
      <div className="col-mb-6 mt-4">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
