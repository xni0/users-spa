import { Link } from "react-router"; // or react-router-dom
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      
      {isAuthenticated && (
        <>
          <Link to="/users/new" style={{ color: "green" }}>+ New User</Link>
          <button onClick={logout} style={{ marginLeft: "auto" }}>Logout</button>
        </>
      )}
      
      {!isAuthenticated && <Link to="/login" style={{ marginLeft: "auto" }}>Login</Link>}
    </nav>
  );
}

export default Navbar;