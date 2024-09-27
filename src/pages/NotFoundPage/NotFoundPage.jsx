import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h3>Sorry, this page is not found</h3>
      <br />
      <br />
      <Link to="/">
        <h4>Go home</h4>
      </Link>
    </div>
  );
};

export default NotFoundPage;