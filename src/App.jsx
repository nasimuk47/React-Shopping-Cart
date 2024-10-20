import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/Login" || location.pathname === "/Registration";

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
