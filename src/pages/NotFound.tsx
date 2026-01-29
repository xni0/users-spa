import { Link } from "react-router";

function NotFound() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;