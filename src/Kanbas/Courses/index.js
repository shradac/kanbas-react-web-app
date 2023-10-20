
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Assignments from "./Assignments";
import "../css/menu.css";
import "../css/sections.css";
import "../css/index.css";
import "./courses.css";
import Breadcrumb from "../Utils/Breadcrumb";
import CourseNavigation from "./CourseNavigation";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "./Home";
import Grades from "./Grades";
import Modules from "./Modules";


function Courses() {
  const location = useLocation();
  const pathname = location.pathname; 
  const lastPath = pathname.slice(pathname.lastIndexOf('/') + 1);
  return (
    <div>
      <Breadcrumb lastPath={lastPath}/>

      <div class="row d-flex mt-2">
        <CourseNavigation />

        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor/>}/>
          
          <Route path="Grades" element={<Grades />} />


       

        </Routes>
      </div>
    </div>
  );
}
export default Courses;
