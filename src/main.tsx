// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Proj1 from "./pages/ScreenProj1";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project1" element={<Proj1 />}></Route>
    </Routes>
  </BrowserRouter>
</>
);
