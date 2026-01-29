import { useParams, Link } from "react-router";
import { useUser } from "../hooks/useUser";

function UserDetail() {
  // Capture the dynamic parameter from the URL
  const { userId } = useParams<{ userId: string }>(); 
  
  // Use the custom hook to fetch specific user data
  const { user, loading, error } = useUser(userId);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h3>
        {user.name} {user.surname}
      </h3>
      <ul>
        <li>ID: {user.id}</li>
        <li>Email: {user.email}</li>
        {/* Render age only if it exists in the response */}
        {user.age && <li>Age: {user.age}</li>}
      </ul>
      <br />
      <Link to="/users">Back to Users</Link>
    </div>
  );
}

export default UserDetail;