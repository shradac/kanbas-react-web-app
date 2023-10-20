
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Assignments from "./Courses/Assignments";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="wd-flex-row-container">
      <KanbasNavigation />
      <div class="col" style={{paddingRight:20}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
          <Route path="Courses/Assignments/*" element={<Assignments/>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;

