import { Link } from "react-router";

function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Home Page</h2>
      <p>This is my Home page</p>
      <Link to="/about">Luci VL</Link>
    </div>
  );
}

export default Home;