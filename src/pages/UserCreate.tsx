import { useState } from "react";
import { useNavigate } from "react-router";
import { createUser } from "../services/usersService";

function UserCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", surname: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createUser(formData);
      // If successful, return to list
      navigate("/users");
    } catch (err) {
      setError("Error creating user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Create New User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
        
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default UserCreate;