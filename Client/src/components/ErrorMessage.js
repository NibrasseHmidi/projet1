import React from "react";
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;