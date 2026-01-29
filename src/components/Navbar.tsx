import { Link } from "react-router";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;