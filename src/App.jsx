import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/Login" || location.pathname === "/Registration";

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Outlet />
    </>
  );
}

export default App;
