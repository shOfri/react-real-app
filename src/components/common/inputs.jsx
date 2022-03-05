import React from "react";

const Input = ({ required = false, error, name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {required && <span>*</span>}
        {label}
      </label>

      <input class="form-control" {...rest} type={name} id={name} name={name} />

      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
