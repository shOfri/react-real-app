import React from "react";

const Footer = () => {
  return (
    <p className="border-top pt-1 text-center">
      <span>
        Real <i className="bi bi-layers-half"></i> App
      </span>
      <span className="mx-1">&copy;</span>
      <span>{new Date().getFullYear()} </span>
    </p>
  );
};

export default Footer;
