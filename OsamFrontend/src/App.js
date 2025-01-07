import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Register from "./components/Home-components/Header/Register";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
