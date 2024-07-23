// App.js
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux";
import Home from "./views/Home/Home"
import Login from "./views/Login/Login";
import Contact from "./views/Contact/Contact"
import About from "./views/About/About";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTurn from "./views/CreateTurn/CreateTurn";

function App() {
    return (
          <>
            <NavBar />
              <div style={{ width: "70vw", margin: "auto" }}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/contacto" element={<Contact />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/mis-turnos" element={<MisTurnos />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/mis-turnos/crear-turno" element = { <CreateTurn />}/>
                      <Route path="/login" element={<Login />} />
                  </Routes>
              </div>
          </>
                
    );
};

export default App;
