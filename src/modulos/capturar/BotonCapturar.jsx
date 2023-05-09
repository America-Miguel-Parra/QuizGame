import React from "react";
import { Link } from "react-router-dom";

const BotonCapturar = () => {
  return (
    <Link to="/capturar">
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button
          className="btn btn-outline-danger bi bi-file-earmark"
          type="button">
          Capturar
        </button>
      </div>
    </Link>
  );
};

export default BotonCapturar;
