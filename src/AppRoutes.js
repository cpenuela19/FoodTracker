import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DailyRequirements from "./components/DailyRequirements/DailyRequirements";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DailyRequirements/>} />
        {/* <Route path="/register" element={<RegisterView/>} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
