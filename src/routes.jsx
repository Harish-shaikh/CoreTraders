import { Routes as ReactRoutes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/portal"
        element={
          <ProtectedRoute>
            <div>Client Portal</div>
          </ProtectedRoute>
        }
      />
    </ReactRoutes>
  );
}
