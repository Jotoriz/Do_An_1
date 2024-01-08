import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tongquan from "./TongQuan/tongquan";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./Router";

function App() {
  return (
    <Router>
      <Tongquan />
    </Router>
  );
}

export default App;
