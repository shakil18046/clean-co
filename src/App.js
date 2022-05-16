import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/Services" element={<Services></Services>}></Route>
          <Route path="/Conatct" element={<Contact></Contact>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
