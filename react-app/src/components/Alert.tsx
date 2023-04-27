import React, { ReactNode } from "react";

interface Props {
  buttonClose: () => void;
}

const Alert = ({ buttonClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={buttonClose}
      ></button>
    </div>
  );
};

export default Alert;
