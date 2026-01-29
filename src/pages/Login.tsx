import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Updates state to true
    navigate("/users"); // Redirects to the protected area
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Login Page</h2>
      <p>You must log in to view users.</p>
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Log In (Simulated)
      </button>
    </div>
  );
}

export default Login;