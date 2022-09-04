import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="content">
      <p>
        The url seems broken, couldn´t fetch the data, else
        <Link to="/" className="back-to-home">
          Back To HomePage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
