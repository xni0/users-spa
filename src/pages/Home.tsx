import { Link } from "react-router";

function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Home Page</h2>
      <p>This is our Home page</p>
      <Link to="/about">About the creator</Link>
    </div>
  );
}

export default Home;