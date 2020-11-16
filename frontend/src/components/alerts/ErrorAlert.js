import { Alert } from "react-bootstrap";

const alertStyle = {
  fontSize: "14px",
  padding: "15px!important",
  whiteSpace: "pre",
};

const listStyle = { padding: "10px", margin: 0 };

const ErrorAlert = ({ errors }) => {
  if (errors) {
    return (
      <Alert variant="warning" style={alertStyle}>
        <ul style={listStyle}>
          {errors &&
            errors.map((error) => <li key={error.msg}>{error.msg}</li>)}
        </ul>
      </Alert>
    );
  } else {
    return null;
  }
};

export default ErrorAlert;
