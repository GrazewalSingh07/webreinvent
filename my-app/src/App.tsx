import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./pages/Register";
import DashboardPage from "./pages/Dashboad";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
