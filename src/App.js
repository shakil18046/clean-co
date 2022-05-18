import "./App.css";
import Navbar from "./component/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/PublicRoutes";
import RequireAuth from "./RequireAuth";
import { PrivateRoute } from "./routes/PrivateRoute";
import AdminRoute from "./AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Component></Component>}
            ></Route>
          ))}
          <Route element={<RequireAuth></RequireAuth>}>
            {PrivateRoute.map(({ path, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={<Component></Component>}
              ></Route>
            ))}
          </Route>
          <Route element={<AdminRoute></AdminRoute>}>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
