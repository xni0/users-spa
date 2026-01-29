import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Index route for the root path */}
        <Route index element={<Home />} />
        
        <Route path="/about" element={<About />} />
        
        {/* Nested routes for Users */}
        <Route path="/users">
          {/* Index route matches /users */}
          <Route index element={<Users />} />
          
          {/* Dynamic route matches /users/1, /users/2, etc. */}
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        
        {/* Wildcard route for 404 errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;