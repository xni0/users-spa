import { BrowserRouter, Routes, Route } from "react-router"; // or react-router-dom
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute.tsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import UserCreate from "./pages/UserCreate"; // <--- New
import Login from "./pages/Login";           // <--- New
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* 🔐 PROTECTED ROUTES */}
          <Route element={<PrivateRoute />}>
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path="new" element={<UserCreate />} /> {/* /users/new */}
              <Route path=":userId" element={<UserDetail />} />
            </Route>
          </Route>
          {/* 🔐 END PROTECTED ROUTES */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;