import { Link } from "react-router";
import { useUsers } from "../hooks/useUsers";

function Users() {
  // Using the custom hook to fetch data
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link to the dynamic route /users/:userId */}
            <Link to={`/users/${user.id}`}>
              {user.name} {user.surname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;